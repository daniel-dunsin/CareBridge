import { HydratedDocument, Types } from 'mongoose';
import { UserDocument } from 'src/api/user/schema/user.schema';
import { Departments, DoctorSpeciality } from '../enums';
import { availableDays } from '../interfaces';
export declare class Doctor {
    user: UserDocument;
    yearsOfExperience: number;
    speciality: DoctorSpeciality;
    department: Departments;
    qualifications: string[];
    bio: string;
    socials: {
        facebook: string;
        twitter: string;
        whatsapp: string;
        linkedin: string;
    };
    kycVerified: boolean;
    isAvailable: boolean;
    availableDays: availableDays[];
    chargePerSession: number;
}
export type DoctorDocument = HydratedDocument<Doctor>;
export declare const DoctorSchema: import("mongoose").Schema<Doctor, import("mongoose").Model<Doctor, any, any, any, import("mongoose").Document<unknown, any, Doctor> & Doctor & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Doctor, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Doctor>> & import("mongoose").FlatRecord<Doctor> & {
    _id: Types.ObjectId;
}>;
