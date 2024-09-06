import { HydratedDocument, Types } from 'mongoose';
import { PatientDocument } from 'src/api/patient/schema/patient.schema';
import { DoctorDocument } from 'src/api/doctor/schema/doctor.schema';
import { AppointmentMode, AppointmentStatus } from '../enums';
import { Departments } from 'src/api/doctor/enums';
export declare class Appointment {
    patient: PatientDocument;
    doctor: DoctorDocument;
    appointmentDate: Date;
    department: Departments;
    startTime: Date;
    endTime: Date;
    status: AppointmentStatus;
    mode: AppointmentMode;
    doctorStatus: AppointmentStatus;
    patientStatus: AppointmentStatus;
    join_url: string;
}
export type AppointmentDocument = HydratedDocument<Appointment>;
export declare const AppointmentSchema: import("mongoose").Schema<Appointment, import("mongoose").Model<Appointment, any, any, any, import("mongoose").Document<unknown, any, Appointment> & Appointment & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Appointment, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Appointment>> & import("mongoose").FlatRecord<Appointment> & {
    _id: Types.ObjectId;
}>;
