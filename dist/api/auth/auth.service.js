"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_schema_1 = require("./schema/jwt.schema");
const mongoose_2 = require("mongoose");
const user_service_1 = require("../user/user.service");
const utils_service_1 = require("../../shared/services/utils.service");
const token_service_1 = require("../token/token.service");
const enums_1 = require("../token/enums");
const mail_service_1 = require("../../shared/mail/mail.service");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const jwt_enum_1 = require("./enums/jwt.enum");
const enums_2 = require("../user/enums");
const doctor_service_1 = require("../doctor/doctor.service");
const patient_service_1 = require("../patient/patient.service");
let AuthService = class AuthService {
    constructor(_jwtModel, userService, utilService, tokenService, mailService, configService, jwtService, doctorService, patientService) {
        this._jwtModel = _jwtModel;
        this.userService = userService;
        this.utilService = utilService;
        this.tokenService = tokenService;
        this.mailService = mailService;
        this.configService = configService;
        this.jwtService = jwtService;
        this.doctorService = doctorService;
        this.patientService = patientService;
    }
    async auth(user) {
        const ONE_HOUR = 1000 * 60 * 60;
        const accessToken = await this.jwtService.signAsync(user, {
            expiresIn: '1h',
        });
        const refreshToken = await this.jwtService.signAsync(user, {
            expiresIn: '7d',
        });
        await this._jwtModel.updateOne({ user: user._id, type: jwt_enum_1.JwtType.access }, { token: accessToken }, { upsert: true });
        await this._jwtModel.updateOne({ user: user._id, type: jwt_enum_1.JwtType.refresh }, { token: refreshToken }, { upsert: true });
        return {
            user,
            meta: {
                accessToken,
                refreshToken,
                lifeSpan: ONE_HOUR,
            },
        };
    }
    async signUp(signUpDto) {
        const userExists = await this.userService.getUser({
            $or: [
                {
                    email: signUpDto.email,
                },
                { phoneNumber: signUpDto.phoneNumber },
            ],
        });
        if (userExists) {
            throw new common_1.BadRequestException('Oops! A user with this email or phone number already exists');
        }
        signUpDto.password = await this.utilService.hashPassword(signUpDto.password);
        const user = await this.userService.createUser(signUpDto);
        const token = await this.tokenService.findOrCreateToken({
            email: user.email,
            value: this.utilService.generateToken(),
            type: enums_1.TokenTypes.accountVerification,
        });
        const link = `${this.configService.get('FRONTEND_URL')}/account/verify?email=${token.email}&token=${token.value}`;
        await this.mailService.sendMail({
            to: user.email,
            subject: 'BdMeds: Account Verification',
            template: 'account-verification',
            context: {
                firstName: user.firstName,
                link,
            },
        });
        return user;
    }
    async onBoardPatient(onBoardPatientDto) {
        onBoardPatientDto.role = enums_2.RoleNames.PATIENT;
        const user = await this.signUp(onBoardPatientDto);
        await this.patientService.createPatient({ user: user._id });
        return {
            success: true,
            message: 'Verification email sent 🪁',
        };
    }
    async onBoardDoctor(onBoardDoctorDto) {
        onBoardDoctorDto.role = enums_2.RoleNames.DOCTOR;
        const user = await this.signUp(onBoardDoctorDto);
        await this.doctorService.createDoctor({
            yearsOfExperience: onBoardDoctorDto.yearsOfExperience,
            speciality: onBoardDoctorDto.speciality,
            chargePerSession: onBoardDoctorDto.chargePerSession,
            user: user._id,
        });
        return {
            success: true,
            message: 'Verification email sent 🪁',
        };
    }
    async verifyEmail(verifyEmailDto) {
        const token = await this.tokenService.getToken({
            email: verifyEmailDto.email,
            value: verifyEmailDto.token,
            type: enums_1.TokenTypes.accountVerification,
        });
        if (!token)
            throw new common_1.NotFoundException('Token is invalid, try to login to receive a new verification link');
        await this.userService.updateUser({ email: token.email }, { emailVerified: true });
        await token.deleteOne();
        return {
            success: true,
            message: 'Account Verified 😉',
        };
    }
    async requestEmailVerificationLink(email) {
        const user = await this.userService.getUser({ email });
        if (!user)
            throw new common_1.NotFoundException("User with this email doesn't exist");
        if (user.emailVerified)
            throw new common_1.NotFoundException('This account is already verified');
        const token = await this.tokenService.findOrCreateToken({
            email: user.email,
            value: this.utilService.generateToken(),
            type: enums_1.TokenTypes.accountVerification,
        });
        const link = `${this.configService.get('FRONTEND_URL')}/account/verify?email=${token.email}&token=${token.value}`;
        await this.mailService.sendMail({
            to: user.email,
            subject: 'BdMeds: Account Verification',
            template: 'account-verification',
            context: {
                firstName: user.firstName,
                link,
            },
        });
        return {
            success: true,
            message: 'Verficiation Email Sent 🪁',
        };
    }
    async forgotPassword(email) {
        const user = await this.userService.getUser({ email });
        if (user) {
            const token = await this.tokenService.findOrCreateToken({
                email,
                type: enums_1.TokenTypes.passwordReset,
                value: this.utilService.generateToken(),
            });
            const link = `${this.configService.get('FRONTEND_URL')}/reset-password?email=${token.email}&token=${token.value}`;
            await this.mailService.sendMail({
                to: user.email,
                subject: 'BdMeds: Password Reset Request',
                template: 'forgot-password',
                context: {
                    firstName: user.firstName,
                    link,
                },
            });
        }
        return {
            success: true,
            message: 'password reset link sent successfully',
        };
    }
    async resetPassword(resetPasswordDto) {
        const token = await this.tokenService.getToken({
            type: enums_1.TokenTypes.passwordReset,
            value: resetPasswordDto.token,
            email: resetPasswordDto.email,
        });
        if (!token)
            throw new common_1.NotFoundException('password reset link is invalid or has expired');
        const hashedPassword = await this.utilService.hashPassword(resetPasswordDto.password);
        await this.userService.updateUser({ email: token.email }, { password: hashedPassword });
        await token.deleteOne();
        return {
            success: true,
            message: 'password reset successful',
        };
    }
    async signIn(signInDto) {
        let user;
        if (signInDto.email) {
            user = await this.userService.getUser({ email: signInDto.email });
        }
        else if (signInDto.phoneNumber) {
            user = await this.userService.getUser({
                phoneNumber: signInDto.phoneNumber,
            });
        }
        if (!user)
            throw new common_1.UnauthorizedException('Invalid login credentials');
        const passwordMatch = await this.utilService.comparePassword(signInDto.password, user.password);
        if (!passwordMatch)
            throw new common_1.UnauthorizedException('Invalid login credentials');
        if (!user.emailVerified)
            throw new common_1.BadRequestException('Email not verified');
        const data = await this.auth(this.utilService.excludePassword(user));
        return {
            success: true,
            message: 'sign in successful',
            data,
        };
    }
    async refreshSession(refreshToken) {
        const verifiedToken = await this.jwtService.verifyAsync(refreshToken);
        if (!verifiedToken) {
            throw new common_1.ForbiddenException('your session is invalid or has expired');
        }
        const jwtToken = await this._jwtModel.findOne({
            type: jwt_enum_1.JwtType.refresh,
            token: refreshToken,
        });
        if (!jwtToken) {
            throw new common_1.ForbiddenException('your session is invalid or has expired');
        }
        const user = await this.userService.getUser({ _id: jwtToken.user });
        const accessToken = await this.jwtService.signAsync(this.utilService.excludePassword(user));
        await this._jwtModel.updateOne({
            type: jwt_enum_1.JwtType.access,
            user: jwtToken.user,
        }, { token: accessToken }, { upsert: true });
        return {
            success: true,
            message: 'session refreshed successfully',
            data: {
                accessToken,
                refreshToken,
            },
        };
    }
    async changePassword(changePasswordDto, userId) {
        const user = await this.userService.getUser({ _id: userId });
        const passwordMatch = await this.utilService.comparePassword(changePasswordDto.oldPassword, user.password);
        if (!passwordMatch)
            throw new common_1.BadRequestException('Old password is incorrect');
        const hashedPassword = await this.utilService.hashPassword(changePasswordDto.newPassword);
        user.password = hashedPassword;
        await user.save();
        return {
            success: true,
            message: 'password changed',
        };
    }
    async onBoardAdmin(onBoardAdminDto) {
        onBoardAdminDto.role = enums_2.RoleNames.ADMIN;
        onBoardAdminDto.password = await this.utilService.hashPassword(onBoardAdminDto.password);
        const data = await this.userService.createUser({
            ...onBoardAdminDto,
            emailVerified: true,
        });
        return {
            success: true,
            message: 'admin created',
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(jwt_schema_1.Jwt.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService,
        utils_service_1.UtilService,
        token_service_1.TokenService,
        mail_service_1.MailService,
        config_1.ConfigService,
        jwt_1.JwtService,
        doctor_service_1.DoctorService,
        patient_service_1.PatientService])
], AuthService);
//# sourceMappingURL=auth.service.js.map