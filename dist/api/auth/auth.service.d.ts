import { JwtDocument } from './schema/jwt.schema';
import { Model } from 'mongoose';
import { UserService } from '../user/user.service';
import { OnBoardAdminDto, OnBoardDoctorDto, OnBoardPatientDto, RegisterDto } from './dto/register.dto';
import { UtilService } from 'src/shared/services/utils.service';
import { TokenService } from '../token/token.service';
import { MailService } from 'src/shared/mail/mail.service';
import { ConfigService } from '@nestjs/config';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UserDocument } from '../user/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { DoctorService } from '../doctor/doctor.service';
import { PatientService } from '../patient/patient.service';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class AuthService {
    private readonly _jwtModel;
    private readonly userService;
    private readonly utilService;
    private readonly tokenService;
    private readonly mailService;
    private readonly configService;
    private readonly jwtService;
    private readonly doctorService;
    private readonly patientService;
    constructor(_jwtModel: Model<JwtDocument>, userService: UserService, utilService: UtilService, tokenService: TokenService, mailService: MailService, configService: ConfigService, jwtService: JwtService, doctorService: DoctorService, patientService: PatientService);
    private auth;
    signUp(signUpDto: RegisterDto): Promise<UserDocument>;
    onBoardPatient(onBoardPatientDto: OnBoardPatientDto): Promise<{
        success: boolean;
        message: string;
    }>;
    onBoardDoctor(onBoardDoctorDto: OnBoardDoctorDto): Promise<{
        success: boolean;
        message: string;
    }>;
    verifyEmail(verifyEmailDto: VerifyEmailDto): Promise<{
        success: boolean;
        message: string;
    }>;
    requestEmailVerificationLink(email: string): Promise<{
        success: boolean;
        message: string;
    }>;
    forgotPassword(email: string): Promise<{
        success: boolean;
        message: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        success: boolean;
        message: string;
    }>;
    signIn(signInDto: SignInDto): Promise<{
        success: boolean;
        message: string;
        data: {
            user: import("mongoose").Document<unknown, {}, import("../user/schema/user.schema").User> & import("../user/schema/user.schema").User & {
                _id: import("mongoose").Types.ObjectId;
            };
            meta: {
                accessToken: string;
                refreshToken: string;
                lifeSpan: number;
            };
        };
    }>;
    refreshSession(refreshToken: string): Promise<{
        success: boolean;
        message: string;
        data: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    changePassword(changePasswordDto: ChangePasswordDto, userId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    onBoardAdmin(onBoardAdminDto: OnBoardAdminDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
