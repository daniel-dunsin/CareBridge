import { UserDocument } from '../../user/schema/user.schema';
import { BookSessionDto, SessionDto } from '../dto/book-appointment.dto';
import { AppointmentProvider } from '../providers/appointment.provider';
import { UpdateAppointmentStatusDto } from '../dto/update-appointment.dto';
export declare class AppointmentController {
    private readonly appointmentProvider;
    constructor(appointmentProvider: AppointmentProvider);
    bookSession(user: UserDocument, doctorId: string, bookSessionDto: BookSessionDto): Promise<{
        success: boolean;
        message: string;
        data: string;
    }>;
    getDoctorAppointments(doctorId: string): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getUserDoctorAppointments(userId: string): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getPatientAppointments(patientId: string): Promise<{
        success: boolean;
        messsage: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getUserPatientAppointments(userId: string): Promise<{
        success: boolean;
        messsage: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getUserAppointments(user: UserDocument): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    } | {
        success: boolean;
        messsage: string;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getUserPendingAppointments(user: UserDocument): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    rescheduleAppointment(sessionDto: SessionDto, appointmentId: string, user: UserDocument): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    cancelAppointment(appointmentId: string, user: UserDocument): Promise<{
        success: boolean;
        message: string;
    }>;
    getAppointment(appointmentId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("../schemas/appointment.schema").Appointment> & import("../schemas/appointment.schema").Appointment & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateAppointmentStatus(updateStatusDto: UpdateAppointmentStatusDto, appointmentId: string, user: UserDocument): Promise<{
        success: boolean;
        message: string;
    }>;
}
