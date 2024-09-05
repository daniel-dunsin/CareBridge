import { Doctor, DoctorDocument } from './schema/doctor.schema';
import { FilterQuery, Model, QueryOptions, UpdateQuery } from 'mongoose';
import { KycDocsDto } from './dto/kyc-verification.dto';
import { KycVerification, KycVerificationDocument } from './schema/kyc-verification.schema';
export declare class DoctorService {
    private readonly _doctorModel;
    private readonly _kycModel;
    constructor(_doctorModel: Model<DoctorDocument>, _kycModel: Model<KycVerificationDocument>);
    private populate;
    createDoctor<T>(data: T): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Doctor> & Doctor & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Doctor> & Doctor & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getDoctor(filter: FilterQuery<DoctorDocument>): Promise<any>;
    getDoctors(filter: FilterQuery<DoctorDocument> & {
        search?: string;
    }): Promise<any[]>;
    updateDoctor(filter: FilterQuery<DoctorDocument>, update: UpdateQuery<DoctorDocument>, options?: QueryOptions<DoctorDocument>): Promise<any>;
    deleteDoctor(filter: FilterQuery<DoctorDocument>): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Doctor> & Doctor & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Doctor> & Doctor & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    updateKyc(kycVerificationDto: KycDocsDto, doctorId: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, KycVerification> & KycVerification & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, KycVerification> & KycVerification & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getDoctorKyc(doctorId: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, KycVerification> & KycVerification & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, KycVerification> & KycVerification & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getKycs(filter: FilterQuery<KycVerificationDocument>): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, KycVerification> & KycVerification & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, KycVerification> & KycVerification & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
}
