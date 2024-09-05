import { DoctorService } from './doctor.service';
import { Types } from 'mongoose';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { UserService } from '../user/user.service';
import { KycDocsDto } from './dto/kyc-verification.dto';
import { FileService } from 'src/shared/file/file.service';
import { MailService } from 'src/shared/mail/mail.service';
import { GetKycDto } from './dto/get-kyc.dto';
import { GetDoctorDto } from './dto/get-doctor.dto';
export declare class DoctorProvider {
    private readonly doctorService;
    private readonly userService;
    private readonly fileService;
    private readonly mailService;
    constructor(doctorService: DoctorService, userService: UserService, fileService: FileService, mailService: MailService);
    getUserDoctor(userId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    getDoctor(doctorId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    updateDoctor(userId: string, updateDoctorDto: UpdateDoctorDto): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    updateKycDocuments(updateKycDto: KycDocsDto, userId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getDoctorKyc(doctorId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schema/kyc-verification.schema").KycVerification> & import("./schema/kyc-verification.schema").KycVerification & {
            _id: Types.ObjectId;
        }> & import("mongoose").Document<unknown, {}, import("./schema/kyc-verification.schema").KycVerification> & import("./schema/kyc-verification.schema").KycVerification & {
            _id: Types.ObjectId;
        } & Required<{
            _id: Types.ObjectId;
        }>;
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
            _id: Types.ObjectId;
        }> & import("mongoose").Document<unknown, {}, import("./schema/kyc-verification.schema").KycVerification> & import("./schema/kyc-verification.schema").KycVerification & {
            _id: Types.ObjectId;
        } & Required<{
            _id: Types.ObjectId;
        }>)[];
    }>;
    getDoctors(query: GetDoctorDto): Promise<{
        success: boolean;
        message: string;
        data: any[];
    }>;
}
