import { HydratedDocument, Types } from 'mongoose';
import { ConsultationDocument } from 'src/api/appointment/schemas/consultation.schema';
import { PatientDocument } from 'src/api/patient/schema/patient.schema';
export declare class BoneMetrics {
    patient: PatientDocument;
    boneHealthStatus: string;
    rangeOfMotion: number;
    totalFractures: number;
    consultation?: ConsultationDocument;
}
export type BoneMetricsDocument = HydratedDocument<BoneMetrics>;
export declare const BoneMetricsSchema: import("mongoose").Schema<BoneMetrics, import("mongoose").Model<BoneMetrics, any, any, any, import("mongoose").Document<unknown, any, BoneMetrics> & BoneMetrics & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BoneMetrics, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<BoneMetrics>> & import("mongoose").FlatRecord<BoneMetrics> & {
    _id: Types.ObjectId;
}>;
