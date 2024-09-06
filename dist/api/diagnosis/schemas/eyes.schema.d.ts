import { HydratedDocument, Types } from 'mongoose';
import { ConsultationDocument } from 'src/api/appointment/schemas/consultation.schema';
import { PatientDocument } from 'src/api/patient/schema/patient.schema';
export declare class EyesMetrics {
    patient: PatientDocument;
    visionTestResult: string;
    ocularPressure: number;
    contactLensBaseCurve: number;
    contactLensDiameter: number;
    consultation?: ConsultationDocument;
}
export type EyesMetricsDocument = HydratedDocument<EyesMetrics>;
export declare const EyesMetricsSchema: import("mongoose").Schema<EyesMetrics, import("mongoose").Model<EyesMetrics, any, any, any, import("mongoose").Document<unknown, any, EyesMetrics> & EyesMetrics & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EyesMetrics, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<EyesMetrics>> & import("mongoose").FlatRecord<EyesMetrics> & {
    _id: Types.ObjectId;
}>;
