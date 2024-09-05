import { AuthService } from './auth.service';
import { OnBoardAdminDto, OnBoardDoctorDto, OnBoardPatientDto } from './dto/register.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SignInDto } from './dto/sign-in.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    onBoardPatient(onBoardPatientDto: OnBoardPatientDto): Promise<{
        success: boolean;
        message: string;
    }>;
    onBoardDoctor(onBoardDoctorDto: OnBoardDoctorDto): Promise<{
        success: boolean;
        message: string;
    }>;
    onBoardAdmin(onBoardAdminDto: OnBoardAdminDto): Promise<{
        success: boolean;
        message: string;
    }>;
    verifyEmail(verifyEmailDto: VerifyEmailDto): Promise<{
        success: boolean;
        message: string;
    }>;
    requestVerificationEmail(email: string): Promise<{
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
    refreshSesson(refreshToken: string): Promise<{
        success: boolean;
        message: string;
        data: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    changePassword(userId: string, changePasswordDto: ChangePasswordDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
