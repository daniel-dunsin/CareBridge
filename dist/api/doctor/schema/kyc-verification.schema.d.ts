import { HydratedDocument, Types } from 'mongoose';
import { DoctorDocument } from './doctor.schema';
import { KycIdType, KycStatus } from '../enums';
export declare class KycVerification {
    doctor: DoctorDocument | string;
    idDoc: string;
    idType: KycIdType;
    professionalCert: string;
    idDocPublicId: string;
    professionalCertPublicId: string;
    status: KycStatus;
}
export type KycVerificationDocument = HydratedDocument<KycVerification>;
export declare const KycVerificationSchema: import("mongoose").Schema<KycVerification, import("mongoose").Model<KycVerification, any, any, any, import("mongoose").Document<unknown, any, KycVerification> & KycVerification & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, KycVerification, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<KycVerification>> & import("mongoose").FlatRecord<KycVerification> & {
    _id: Types.ObjectId;
}>;
