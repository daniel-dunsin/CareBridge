import { HydratedDocument, Types } from 'mongoose';
import { ConsultationDocument } from 'src/api/appointment/schemas/consultation.schema';
import { PatientDocument } from 'src/api/patient/schema/patient.schema';
export declare class HeartMetrics {
    patient: PatientDocument;
    consultation?: ConsultationDocument | string;
    heartHealthStatus: string;
    heartRate: number;
    bloodPressureSystolic: number;
    bloodPressureDiastolic: number;
    bloodOxygenLevel: number;
    cholesterolTotal: number;
    cholesterolLDL: number;
    cholesterolHDL: number;
    ejectionFraction: number;
    cardiacOutput: number;
    bloodGlucoseLevel: number;
}
export type HeartMetricsDocument = HydratedDocument<HeartMetrics>;
export declare const HeartMetricsSchema: import("mongoose").Schema<HeartMetrics, import("mongoose").Model<HeartMetrics, any, any, any, import("mongoose").Document<unknown, any, HeartMetrics> & HeartMetrics & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HeartMetrics, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<HeartMetrics>> & import("mongoose").FlatRecord<HeartMetrics> & {
    _id: Types.ObjectId;
}>;
