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
exports.AppointmentProvider = void 0;
const common_1 = require("@nestjs/common");
const appointment_service_1 = require("../services/appointment.service");
const doctor_service_1 = require("../../doctor/doctor.service");
const patient_service_1 = require("../../patient/patient.service");
const mongoose_1 = require("mongoose");
const enums_1 = require("../enums");
const mail_service_1 = require("../../../shared/mail/mail.service");
const date_fns_1 = require("date-fns");
const enums_2 = require("../../user/enums");
const schedule_1 = require("@nestjs/schedule");
const uuid_1 = require("uuid");
const config_1 = require("@nestjs/config");
const payment_service_1 = require("../../payment/services/payment.service");
const paystack_service_1 = require("../../payment/services/paystack.service");
let AppointmentProvider = class AppointmentProvider {
    constructor(appointmentService, doctorService, patientService, mailService, configService, paymentService, paystackService) {
        this.appointmentService = appointmentService;
        this.doctorService = doctorService;
        this.patientService = patientService;
        this.mailService = mailService;
        this.configService = configService;
        this.paymentService = paymentService;
        this.paystackService = paystackService;
    }
    async validatePatientAndDocAvailaibility(sessionDto, doctorId, patientId, isPatient) {
        const query = {
            appointmentDate: {
                $gte: (0, date_fns_1.startOfDay)(sessionDto.appointmentDate),
                $lte: (0, date_fns_1.endOfDay)(sessionDto.appointmentDate),
            },
            $or: [
                {
                    startTime: { $lte: sessionDto.endTime },
                    endTime: { $gte: sessionDto.startTime },
                },
                {
                    startTime: { $gte: sessionDto.startTime },
                    endTime: { $lte: sessionDto.endTime },
                },
            ],
            status: enums_1.AppointmentStatus.PENDING,
        };
        const patientPrevAppointment = await this.appointmentService.getAppointment({
            patient: new mongoose_1.Types.ObjectId(patientId),
            ...query,
        });
        if (patientPrevAppointment) {
            throw new common_1.BadRequestException(`${isPatient ? 'You' : 'This patient'} already have an appointment from ${(0, date_fns_1.format)(patientPrevAppointment.startTime, 'h:mm a')} to ${(0, date_fns_1.format)(patientPrevAppointment.endTime, 'h:mm a')} on ${(0, date_fns_1.format)(patientPrevAppointment.appointmentDate, 'do, MMM yyyy')}, hence, you can select a time within this time interval`);
        }
        const doctorPrevAppointment = await this.appointmentService.getAppointment({
            doctor: new mongoose_1.Types.ObjectId(doctorId),
            ...query,
        });
        if (doctorPrevAppointment) {
            throw new common_1.BadRequestException(`${isPatient ? 'This doctor' : 'You'} already have an appointment from ${(0, date_fns_1.format)(doctorPrevAppointment.startTime, 'h:mm a')} to ${(0, date_fns_1.format)(doctorPrevAppointment.endTime, 'h:mm a')} on ${(0, date_fns_1.format)(doctorPrevAppointment.appointmentDate, 'do, MMM yyyy')}, hence, you can select a time within this time interval`);
        }
    }
    async bookSession(bookSessionDto, doctorId, user) {
        const doctor = await this.doctorService.getDoctor({ _id: doctorId });
        if (!doctor)
            throw new common_1.NotFoundException('Doctor not found');
        if (!doctor.isAvailable) {
            throw new common_1.NotFoundException(`This doctor is not available at the moment`);
        }
        const patient = await this.patientService.getPatient({
            user: new mongoose_1.Types.ObjectId(user._id),
        });
        if (!patient)
            throw new common_1.NotFoundException('Patient not found');
        await this.validatePatientAndDocAvailaibility(bookSessionDto, doctor._id, patient._id, true);
        const amount = doctor.chargePerSession;
        const reference = `doctor-payment-${(0, uuid_1.v4)()}`;
        let join_url = undefined;
        if (bookSessionDto.mode == enums_1.AppointmentMode.ONLINE) {
            const frontendUrl = this.configService.get('FRONTEND_URL');
            const randomId = (0, uuid_1.v4)();
            join_url = `${frontendUrl}/meet?room_id=${randomId}`;
        }
        const appointment = {
            ...bookSessionDto,
            join_url,
            department: doctor.department,
            doctor: doctor._id,
            patient: patient._id,
        };
        const paymentUrl = await this.paystackService.initiateTransaction({
            email: user.email,
            reference,
            amount,
            redirect_url: '/appointments',
        });
        await this.paymentService.createPaymentAttempt({
            user: user._id,
            reference,
            amount,
            metadata: {
                appointment,
                doctor,
                user,
            },
        });
        return {
            success: true,
            message: 'Appointment Scheduled',
            data: paymentUrl,
        };
    }
    async getDoctorAppointments(doctorId) {
        const data = await this.appointmentService.getAppointments({
            doctor: new mongoose_1.Types.ObjectId(doctorId),
            status: { $nin: [enums_1.AppointmentStatus.CANCELLED, enums_1.AppointmentStatus.FAILED] },
        });
        return {
            success: true,
            message: 'Appointments fetched successfully',
            data,
        };
    }
    async getUserDoctorAppointments(userId) {
        const doctor = await this.doctorService.getDoctor({
            user: new mongoose_1.Types.ObjectId(userId),
        });
        if (!doctor)
            throw new common_1.NotFoundException('Doctor not found');
        return await this.getDoctorAppointments(doctor._id);
    }
    async getPatientAppointments(patientId) {
        const data = await this.appointmentService.getAppointments({
            patient: new mongoose_1.Types.ObjectId(patientId),
            status: { $nin: [enums_1.AppointmentStatus.CANCELLED, enums_1.AppointmentStatus.FAILED] },
        });
        return {
            success: true,
            messsage: 'Appointments fetched successfully',
            data,
        };
    }
    async getUserAppointments(user) {
        if (user.role === enums_2.RoleNames.PATIENT) {
            return await this.getUserPatientAppointments(String(user._id));
        }
        else if (user.role === enums_2.RoleNames.DOCTOR) {
            return await this.getUserDoctorAppointments(String(user._id));
        }
    }
    async getUserPatientAppointments(userId) {
        const patient = await this.patientService.getPatient({
            user: new mongoose_1.Types.ObjectId(userId),
        });
        if (!patient)
            throw new common_1.NotFoundException('Patient not found');
        return await this.getPatientAppointments(patient._id);
    }
    async getUserPendingAppointments(user) {
        const _query = {
            status: enums_1.AppointmentStatus.PENDING,
        };
        if (user.role === enums_2.RoleNames.PATIENT) {
            const patient = await this.patientService.getPatient({
                user: new mongoose_1.Types.ObjectId(user._id),
            });
            _query.patient = patient._id;
        }
        else if (user.role === enums_2.RoleNames.DOCTOR) {
            const doctor = await this.doctorService.getDoctor({
                user: new mongoose_1.Types.ObjectId(user._id),
            });
            _query.doctor = doctor._id;
        }
        return await this.appointmentService.getAppointments(_query);
    }
    async getAppointment(appointmentId) {
        const data = await this.appointmentService.getAppointment({
            _id: appointmentId,
        });
        if (!data)
            throw new common_1.NotFoundException('Appointment not found');
        return {
            success: true,
            message: 'appointment fetched',
            data,
        };
    }
    async rescheduleAppointment(sessionDto, appointmentId, user) {
        const appointment = await this.appointmentService.getAppointment({
            _id: appointmentId,
        });
        if (appointment.status != enums_1.AppointmentStatus.PENDING)
            throw new common_1.BadRequestException('Only pending appointments can be rescheduled');
        if (String(appointment.doctor.user._id) != String(user._id) &&
            String(appointment.patient.user._id) != String(user._id)) {
            throw new common_1.BadRequestException('Only the doctor/patient of this appointment can reschedule it');
        }
        await this.validatePatientAndDocAvailaibility(sessionDto, String(appointment.doctor._id), String(appointment.patient._id), user.role === enums_2.RoleNames.PATIENT);
        const data = await this.appointmentService.updateAppointment({ _id: appointmentId }, sessionDto);
        const emailContext = {
            doctorName: appointment.doctor.user.firstName,
            patientName: `${appointment.patient.user?.firstName} ${appointment.patient.user?.lastName}`,
            prevAppointmentDate: (0, date_fns_1.format)(appointment.appointmentDate, 'do, MMM yyyy'),
            prevStartTime: (0, date_fns_1.format)(appointment.startTime, 'h:mm a'),
            prevEndTime: (0, date_fns_1.format)(appointment.endTime, 'h:mm a'),
            newAppointmentDate: (0, date_fns_1.format)(sessionDto.appointmentDate, 'do, MMM yyyy'),
            newStartTime: (0, date_fns_1.format)(sessionDto.startTime, 'h:mm a'),
            newEndTime: (0, date_fns_1.format)(sessionDto.endTime, 'h:mm a'),
        };
        await this.mailService.sendMail({
            to: appointment.patient.user.email,
            subject: 'CareBridge: Appointment Reschedule',
            template: 'patient-rescheduled-appointment',
            context: emailContext,
        });
        await this.mailService.sendMail({
            to: appointment.doctor.user.email,
            subject: 'CareBridge: Appointment Reschedule',
            template: 'doctor-rescheduled-appointment',
            context: emailContext,
        });
        return {
            success: true,
            message: 'appointment rescheduled',
            data,
        };
    }
    async cancelAppointment(appointmentId, user) {
        const appointment = await this.appointmentService.getAppointment({
            _id: appointmentId,
        });
        if (appointment.status != enums_1.AppointmentStatus.PENDING)
            throw new common_1.BadRequestException('Only pending appointments can be rescheduled');
        if (String(appointment.doctor.user._id) != String(user._id) &&
            String(appointment.patient.user._id) != String(user._id)) {
            throw new common_1.BadRequestException('Only the doctor/patient of this appointment can reschedule it');
        }
        appointment.status = enums_1.AppointmentStatus.CANCELLED;
        await appointment.save();
        const triggeredByPatient = user.role === enums_2.RoleNames.PATIENT;
        const triggerer = triggeredByPatient
            ? appointment.patient.user
            : appointment.doctor.user;
        const receiver = triggeredByPatient
            ? appointment.doctor.user
            : appointment.patient.user;
        await this.mailService.sendMail({
            to: triggeredByPatient
                ? appointment.doctor.user.email
                : appointment.patient.user.email,
            subject: 'CareBridge: Cancelled Appoints',
            template: 'appointment-cancelled',
            context: {
                receiverName: `${receiver.firstName} ${receiver.firstName}`,
                triggererName: `${triggerer.firstName} ${triggerer.firstName}`,
                appointmentDate: (0, date_fns_1.format)(appointment.appointmentDate, 'do, MMM yyyy'),
                startTime: (0, date_fns_1.format)(appointment.startTime, 'h:mm a'),
                endTime: (0, date_fns_1.format)(appointment.endTime, 'h:mm a'),
            },
        });
        return {
            success: true,
            message: 'Appointment cancelled successfully',
        };
    }
    async updateAppointmentStatus(status, appointmentId, user) {
        const appointment = await this.appointmentService.getAppointment({
            _id: appointmentId,
        });
        if (!appointment)
            throw new common_1.NotFoundException('Appointment not found');
        if (user.role === enums_2.RoleNames.PATIENT) {
            appointment.patientStatus = status;
        }
        else {
            appointment.doctorStatus = status;
        }
        await appointment.save();
        return {
            success: true,
            message: 'status updated',
        };
    }
    async appointmentReminder() {
        const appointments = await this.appointmentService.getAppointments({
            startTime: {
                $lte: (0, date_fns_1.add)(new Date(), { minutes: 30 }),
                $gte: new Date(),
            },
        });
        if (appointments.length > 0) {
            await Promise.allSettled(appointments.map(async (appointment) => {
                const doctor = appointment.doctor.user;
                const patient = appointment.patient.user;
                const startTime = (0, date_fns_1.format)(appointment.startTime, 'h:mm a');
                await this.mailService.sendMail({
                    to: doctor.email,
                    subject: 'CareBridge: Appointment reminder',
                    template: 'appointment-reminder',
                    context: {
                        personName: doctor.firstName,
                        partnerName: `${patient.firstName} ${patient.lastName}`,
                        startTime,
                        meetingLocation: appointment.join_url ?? 'Physical',
                    },
                });
                await this.mailService.sendMail({
                    to: patient.email,
                    subject: 'CareBridge: Appointment reminder',
                    template: 'appointment-reminder',
                    context: {
                        personName: patient.firstName,
                        partnerName: `${doctor.firstName} ${doctor.lastName}`,
                        startTime,
                        meetingLocation: appointment.join_url ?? 'Physical',
                    },
                });
            }));
        }
    }
};
exports.AppointmentProvider = AppointmentProvider;
__decorate([
    (0, schedule_1.Cron)('0 */3 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppointmentProvider.prototype, "appointmentReminder", null);
exports.AppointmentProvider = AppointmentProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService,
        doctor_service_1.DoctorService,
        patient_service_1.PatientService,
        mail_service_1.MailService,
        config_1.ConfigService,
        payment_service_1.PaymentService,
        paystack_service_1.PaystackService])
], AppointmentProvider);
//# sourceMappingURL=appointment.provider.js.map