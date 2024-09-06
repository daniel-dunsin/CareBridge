import { HydratedDocument, Types } from 'mongoose';
import { ConsultationDocument } from 'src/api/appointment/schemas/consultation.schema';
import { PatientDocument } from 'src/api/patient/schema/patient.schema';
export declare class LiverMetrics {
    patient: PatientDocument;
    liverHealthStatus: string;
    altLevel: number;
    astLevel: number;
    bilirubin: number;
    fibrosisScore: number;
    consultation?: ConsultationDocument;
}
export type LiverMetricsDocument = HydratedDocument<LiverMetrics>;
export declare const LiverMetricsSchema: import("mongoose").Schema<LiverMetrics, import("mongoose").Model<LiverMetrics, any, any, any, import("mongoose").Document<unknown, any, LiverMetrics> & LiverMetrics & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LiverMetrics, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<LiverMetrics>> & import("mongoose").FlatRecord<LiverMetrics> & {
    _id: Types.ObjectId;
}>;
