import { HydratedDocument, Types } from 'mongoose';
import { ConsultationDocument } from 'src/api/appointment/schemas/consultation.schema';
import { PatientDocument } from 'src/api/patient/schema/patient.schema';
export declare class TeethMetrics {
    patient: PatientDocument;
    dentalHealthStatus: string;
    cavitiesCount: number;
    gumRecession: number;
    plaqueIndex: number;
    recentProcedures: string;
    consultation?: ConsultationDocument;
}
export type TeethMetricsDocument = HydratedDocument<TeethMetrics>;
export declare const TeethMetricsSchema: import("mongoose").Schema<TeethMetrics, import("mongoose").Model<TeethMetrics, any, any, any, import("mongoose").Document<unknown, any, TeethMetrics> & TeethMetrics & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TeethMetrics, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TeethMetrics>> & import("mongoose").FlatRecord<TeethMetrics> & {
    _id: Types.ObjectId;
}>;
