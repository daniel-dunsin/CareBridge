import { HydratedDocument, Types } from 'mongoose';
import { AppointmentDocument } from './appointment.schema';
import { DiagnosisDocument } from '../types';
export declare class Consultation {
    appointment: AppointmentDocument;
    diagnosis: DiagnosisDocument;
    diagnosisRef: string;
    consultationNote: string;
    treatmentPlan: string;
    symptoms: string;
}
export type ConsultationDocument = HydratedDocument<Consultation>;
export declare const ConsultationSchema: import("mongoose").Schema<Consultation, import("mongoose").Model<Consultation, any, any, any, import("mongoose").Document<unknown, any, Consultation> & Consultation & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Consultation, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Consultation>> & import("mongoose").FlatRecord<Consultation> & {
    _id: Types.ObjectId;
}>;
