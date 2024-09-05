import { HydratedDocument, Types } from 'mongoose';
import { DoctorDocument } from 'src/api/doctor/schema/doctor.schema';
import { UserDocument } from 'src/api/user/schema/user.schema';
export declare class Patient {
    user: UserDocument;
    dateOfBirth: Date;
    favouriteDoctors: Array<DoctorDocument | string>;
}
export type PatientDocument = HydratedDocument<Patient>;
export declare const PatientSchema: import("mongoose").Schema<Patient, import("mongoose").Model<Patient, any, any, any, import("mongoose").Document<unknown, any, Patient> & Patient & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Patient, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Patient>> & import("mongoose").FlatRecord<Patient> & {
    _id: Types.ObjectId;
}>;
