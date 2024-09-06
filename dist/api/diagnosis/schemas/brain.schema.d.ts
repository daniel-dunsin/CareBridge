import { HydratedDocument, Types } from 'mongoose';
import { ConsultationDocument } from 'src/api/appointment/schemas/consultation.schema';
import { PatientDocument } from 'src/api/patient/schema/patient.schema';
export declare class BrainMetrics {
    patient: PatientDocument;
    brainHealthStatus: string;
    eegResults: number;
    cognitiveFunctionTestScore: {
        lower: number;
        upper: number;
    };
    consultation?: ConsultationDocument;
}
export type BrainMetricsDocument = HydratedDocument<BrainMetrics>;
export declare const BrainMetricsSchema: import("mongoose").Schema<BrainMetrics, import("mongoose").Model<BrainMetrics, any, any, any, import("mongoose").Document<unknown, any, BrainMetrics> & BrainMetrics & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BrainMetrics, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<BrainMetrics>> & import("mongoose").FlatRecord<BrainMetrics> & {
    _id: Types.ObjectId;
}>;
