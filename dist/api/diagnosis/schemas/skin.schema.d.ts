import { HydratedDocument, Types } from 'mongoose';
import { ConsultationDocument } from 'src/api/appointment/schemas/consultation.schema';
import { PatientDocument } from 'src/api/patient/schema/patient.schema';
export declare class SkinMetrics {
    patient: PatientDocument;
    skinHealthStatus: string;
    lesionCount: number;
    lesionSize: number;
    biopsyResults: string;
    consultation?: ConsultationDocument;
}
export type SkinMetricsDocument = HydratedDocument<SkinMetrics>;
export declare const SkinMetricsSchema: import("mongoose").Schema<SkinMetrics, import("mongoose").Model<SkinMetrics, any, any, any, import("mongoose").Document<unknown, any, SkinMetrics> & SkinMetrics & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SkinMetrics, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SkinMetrics>> & import("mongoose").FlatRecord<SkinMetrics> & {
    _id: Types.ObjectId;
}>;
