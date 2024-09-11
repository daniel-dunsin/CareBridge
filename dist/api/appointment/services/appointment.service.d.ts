import { Appointment, AppointmentDocument } from '../schemas/appointment.schema';
import { FilterQuery, Model, QueryOptions, UpdateQuery } from 'mongoose';
export declare class AppointmentService {
    private readonly _appointmentModel;
    constructor(_appointmentModel: Model<AppointmentDocument>);
    private populate;
    createAppointment<T>(createAppointmentDto: T): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Appointment> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Appointment> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    updateAppointment(filter: FilterQuery<AppointmentDocument>, update: UpdateQuery<AppointmentDocument>, options?: QueryOptions<AppointmentDocument>): Promise<any>;
    getAppointments(filter: FilterQuery<AppointmentDocument>): Promise<AppointmentDocument[]>;
    getAppointment(filter: FilterQuery<AppointmentDocument>): Promise<AppointmentDocument>;
    deleteAppointment(filter: FilterQuery<AppointmentDocument>, options?: QueryOptions<AppointmentDocument>): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Appointment> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Appointment> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
