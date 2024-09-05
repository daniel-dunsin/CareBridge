import { DoctorProvider } from './doctor.provider';
import { DoctorSpeciality, KycIdType } from './enums';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { KycDocsDto } from './dto/kyc-verification.dto';
import { GetKycDto } from './dto/get-kyc.dto';
import { GetDoctorDto } from './dto/get-doctor.dto';
export declare class DoctorController {
    private readonly doctorProvider;
    constructor(doctorProvider: DoctorProvider);
    getUserDoctor(userId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    getSpecialities(): Promise<{
        success: boolean;
        message: string;
        data: DoctorSpeciality[];
    }>;
    updateDoctor(userId: string, updateDoctorDto: UpdateDoctorDto): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    updateKycInfo(userId: string, updateKycDto: KycDocsDto): Promise<{
        success: boolean;
        message: string;
    }>;
    getDoctorKyc(doctorId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schema/kyc-verification.schema").KycVerification> & import("./schema/kyc-verification.schema").KycVerification & {
            _id: import("mongoose").Types.ObjectId;
        }> & import("mongoose").Document<unknown, {}, import("./schema/kyc-verification.schema").KycVerification> & import("./schema/kyc-verification.schema").KycVerification & {
            _id: import("mongoose").Types.ObjectId;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    getKycIdTypes(): Promise<{
        sucess: boolean;
        message: string;
        data: KycIdType[];
    }>;
    verifyDoctorKyc(doctorId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    rejectDoctorKyc(doctorId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getKycs(query: GetKycDto): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schema/kyc-verification.schema").KycVerification> & import("./schema/kyc-verification.schema").KycVerification & {
            _id: import("mongoose").Types.ObjectId;
        }> & import("mongoose").Document<unknown, {}, import("./schema/kyc-verification.schema").KycVerification> & import("./schema/kyc-verification.schema").KycVerification & {
            _id: import("mongoose").Types.ObjectId;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    getDoctor(doctorId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    getDoctors(query: GetDoctorDto): Promise<{
        success: boolean;
        message: string;
        data: any[];
    }>;
}
