import { ConfigService } from '@nestjs/config';
import { ChargeResponse, WebhookResponse } from '../interfaces';
import { Request } from 'express';
import { PaymentService } from './payment.service';
import { MailService } from 'src/shared/mail/mail.service';
import { OrderService } from 'src/api/order/order.service';
import { UserService } from 'src/api/user/user.service';
import { AppointmentService } from 'src/api/appointment/services/appointment.service';
export declare class WebhookService {
    private readonly configService;
    private readonly paymentService;
    private readonly mailService;
    private readonly orderService;
    private readonly userService;
    private readonly appointmentService;
    constructor(configService: ConfigService, paymentService: PaymentService, mailService: MailService, orderService: OrderService, userService: UserService, appointmentService: AppointmentService);
    private validateWebhook;
    processWebhook(req: Request<object, object, WebhookResponse>): Promise<void>;
    successfulMedicinePurchase(chargeResponse: ChargeResponse): Promise<void>;
    failedMedicinePurchase(chargeResponse: ChargeResponse): Promise<void>;
    successfulDoctorPayment(chargeResponse: ChargeResponse): Promise<void>;
}
