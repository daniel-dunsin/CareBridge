import { HydratedDocument, Types } from 'mongoose';
import { ConsultationDocument } from 'src/api/appointment/schemas/consultation.schema';
import { PatientDocument } from 'src/api/patient/schema/patient.schema';
import { Frequency } from '../enums';
export declare class KidneyMetrics {
    patient: PatientDocument;
    kidneyHealthStatus: string;
    creatinine: number;
    BUN: number;
    urineProtein: number;
    dialysisHours: number;
    dialysisFrequency: Frequency;
    consultation?: ConsultationDocument;
}
export type KidneyMetricsDocument = HydratedDocument<KidneyMetrics>;
export declare const KidneyMetricsSchema: import("mongoose").Schema<KidneyMetrics, import("mongoose").Model<KidneyMetrics, any, any, any, import("mongoose").Document<unknown, any, KidneyMetrics> & KidneyMetrics & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, KidneyMetrics, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<KidneyMetrics>> & import("mongoose").FlatRecord<KidneyMetrics> & {
    _id: Types.ObjectId;
}>;
