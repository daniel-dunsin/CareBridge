"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto = require("crypto");
const enums_1 = require("../enums");
const payment_service_1 = require("./payment.service");
const mail_service_1 = require("../../../shared/mail/mail.service");
const order_service_1 = require("../../order/order.service");
const user_service_1 = require("../../user/user.service");
const appointment_service_1 = require("../../appointment/services/appointment.service");
const date_fns_1 = require("date-fns");
let WebhookService = class WebhookService {
    constructor(configService, paymentService, mailService, orderService, userService, appointmentService) {
        this.configService = configService;
        this.paymentService = paymentService;
        this.mailService = mailService;
        this.orderService = orderService;
        this.userService = userService;
        this.appointmentService = appointmentService;
    }
    validateWebhook(signature, webhookResponse) {
        const secretKey = this.configService.get('PAYSTACK_SECRET_KEY');
        const hash = crypto
            .createHmac('sha512', secretKey)
            .update(JSON.stringify(webhookResponse))
            .digest('hex');
        if (hash != signature)
            throw new common_1.ForbiddenException('oops! this endpoint is only authorized for paystack');
    }
    async processWebhook(req) {
        const signature = req.headers['x-paystack-signature'];
        this.validateWebhook(signature, req.body);
        const event = req.body.event;
        const reference = req.body.data.reference;
        switch (event) {
            case enums_1.WebhookEvents.TRANSACTION_SUCCESSFUL:
                if (reference.startsWith('medicine-checkout')) {
                    await this.successfulMedicinePurchase(req.body.data);
                }
                if (reference.startsWith('doctor-payment')) {
                    await this.successfulDoctorPayment(req.body.data);
                }
                break;
            case enums_1.WebhookEvents.TRANSACTION_FAILED:
                if (reference.startsWith('medicine-checkout')) {
                    await this.failedMedicinePurchase(req.body.data);
                }
                break;
            default:
                throw new common_1.MethodNotAllowedException('Method not implemented!');
        }
    }
    async successfulMedicinePurchase(chargeResponse) {
        const attempt = await this.paymentService.updatePaymentAttempt({ reference: chargeResponse.reference }, { status: enums_1.PaymentStatus.SUCCESSFUL });
        if (!attempt)
            throw new common_1.NotFoundException('transaction not found');
        await this.orderService.createOrder({
            ...attempt.metadata,
            user: attempt.user,
        });
        const user = await this.userService.getUser({ _id: attempt.user });
        await this.mailService.sendMail({
            to: user?.email,
            subject: 'Order Processed! 📦',
            template: 'drugs-purchased',
            context: {
                firstName: user?.firstName,
            },
        });
    }
    async failedMedicinePurchase(chargeResponse) {
        const attempt = await this.paymentService.updatePaymentAttempt({
            reference: chargeResponse.reference,
        }, { status: enums_1.PaymentStatus.FAILED });
        if (!attempt)
            throw new common_1.NotFoundException('transaction not found');
    }
    async successfulDoctorPayment(chargeResponse) {
        const attempt = await this.paymentService.updatePaymentAttempt({ reference: chargeResponse.reference }, { status: enums_1.PaymentStatus.SUCCESSFUL });
        if (!attempt)
            throw new common_1.NotFoundException('transaction not found');
        const { appointment, doctor, user } = attempt.metadata;
        await this.appointmentService.createAppointment(appointment);
        await this.mailService.sendMail({
            to: doctor.user.email,
            subject: 'BdMeds',
            template: 'doctor-new-appointment',
            context: {
                doctorName: doctor.user.firstName,
                appointmentMode: appointment.mode,
                patientName: `${user?.firstName} ${user?.lastName}`,
                patientEmail: user?.email,
                patientPhoneNumber: user.phoneNumber,
                appointmentDate: (0, date_fns_1.format)(appointment.appointmentDate, 'do, MMM yyyy'),
                startTime: (0, date_fns_1.format)(appointment.startTime, 'h:mm a'),
                endTime: (0, date_fns_1.format)(appointment.endTime, 'h:mm a'),
                meetingLocation: appointment.join_url || 'Physical',
            },
        });
        await this.mailService.sendMail({
            to: user.email,
            subject: 'BDMeds',
            template: 'appointment-payment-made.hbs',
            context: {
                personName: user.firstName,
            },
        });
    }
};
exports.WebhookService = WebhookService;
exports.WebhookService = WebhookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        payment_service_1.PaymentService,
        mail_service_1.MailService,
        order_service_1.OrderService,
        user_service_1.UserService,
        appointment_service_1.AppointmentService])
], WebhookService);
//# sourceMappingURL=webhooks.service.js.map