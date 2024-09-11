import { BookSessionDto, SessionDto } from '../dto/book-appointment.dto';
import { UserDocument } from '../../user/schema/user.schema';
import { AppointmentService } from '../services/appointment.service';
import { DoctorService } from '../../doctor/doctor.service';
import { PatientService } from '../../patient/patient.service';
import { Types } from 'mongoose';
import { AppointmentStatus } from '../enums';
import { MailService } from 'src/shared/mail/mail.service';
import { ConfigService } from '@nestjs/config';
import { PaymentService } from 'src/api/payment/services/payment.service';
import { PaystackService } from 'src/api/payment/services/paystack.service';
export declare class AppointmentProvider {
    private readonly appointmentService;
    private readonly doctorService;
    private readonly patientService;
    private readonly mailService;
    private readonly configService;
    private readonly paymentService;
    private readonly paystackService;
    constructor(appointmentService: AppointmentService, doctorService: DoctorService, patientService: PatientService, mailService: MailService, configService: ConfigService, paymentService: PaymentService, paystackService: PaystackService);
    private validatePatientAndDocAvailaibility;
    bookSession(bookSessionDto: BookSessionDto, doctorId: string, user: UserDocument): Promise<{
        success: boolean;
        message: string;
        data: string;
    }>;
    getDoctorAppointments(doctorId: string): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: Types.ObjectId;
        })[];
    }>;
    getUserDoctorAppointments(userId: string): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: Types.ObjectId;
        })[];
    }>;
    getPatientAppointments(patientId: string): Promise<{
        success: boolean;
        messsage: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: Types.ObjectId;
        })[];
    }>;
    getUserAppointments(user: UserDocument): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: Types.ObjectId;
        })[];
    } | {
        success: boolean;
        messsage: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: Types.ObjectId;
        })[];
    }>;
    getUserPatientAppointments(userId: string): Promise<{
        success: boolean;
        messsage: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: Types.ObjectId;
        })[];
    }>;
    getUserPendingAppointments(user: UserDocument): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
        _id: Types.ObjectId;
    })[]>;
    getAppointment(appointmentId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: Types.ObjectId;
        };
    }>;
    rescheduleAppointment(sessionDto: SessionDto, appointmentId: string, user: UserDocument): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    cancelAppointment(appointmentId: string, user: UserDocument): Promise<{
        success: boolean;
        message: string;
    }>;
    updateAppointmentStatus(status: AppointmentStatus, appointmentId: string, user: UserDocument): Promise<{
        success: boolean;
        message: string;
    }>;
    appointmentReminder(): Promise<void>;
}
