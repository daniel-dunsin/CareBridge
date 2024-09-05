import { Patient, PatientDocument } from './schema/patient.schema';
import { FilterQuery, Model, Query, QueryOptions, UpdateQuery } from 'mongoose';
export declare class PatientService {
    private readonly _patientModel;
    constructor(_patientModel: Model<PatientDocument>);
    populate(model: Query<any, PatientDocument>): Promise<any>;
    createPatient<T>(data: T): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Patient> & Patient & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Patient> & Patient & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getPatient(filter: FilterQuery<PatientDocument>): Promise<any>;
    getPatients(filter: FilterQuery<PatientDocument>): Promise<any>;
    updatePatient(filter: FilterQuery<PatientDocument>, update: UpdateQuery<PatientDocument>, options?: QueryOptions<PatientDocument>): Promise<any>;
    deletePatient(filter: FilterQuery<PatientDocument>): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Patient> & Patient & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Patient> & Patient & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
