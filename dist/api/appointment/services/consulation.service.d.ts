import { Consultation, ConsultationDocument } from '../schemas/consultation.schema';
import { ClientSession, FilterQuery, Model, QueryOptions, UpdateQuery } from 'mongoose';
export declare class ConsultationService {
    private readonly _consultationModel;
    constructor(_consultationModel: Model<ConsultationDocument>);
    private populate;
    createConsultation<T>(createConsultaionDto: T, session?: ClientSession): Promise<Omit<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Consultation> & Consultation & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Consultation> & Consultation & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    getConsultation(filter: FilterQuery<ConsultationDocument>): Promise<ConsultationDocument>;
    getConsultations(filter: FilterQuery<ConsultationDocument>): Promise<ConsultationDocument[]>;
    updateConsultation(filter: FilterQuery<ConsultationDocument>, update: UpdateQuery<ConsultationDocument>, options: QueryOptions<ConsultationDocument>): Promise<ConsultationDocument>;
    deleteConsultation(filter: FilterQuery<ConsultationDocument>, options: QueryOptions<ConsultationDocument>): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Consultation> & Consultation & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Consultation> & Consultation & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
