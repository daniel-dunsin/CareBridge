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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./dto/register.dto");
const verify_email_dto_1 = require("./dto/verify-email.dto");
const reset_password_dto_1 = require("./dto/reset-password.dto");
const sign_in_dto_1 = require("./dto/sign-in.dto");
const auth_decorators_1 = require("../../shared/decorators/auth.decorators");
const change_password_dto_1 = require("./dto/change-password.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async onBoardPatient(onBoardPatientDto) {
        const data = await this.authService.onBoardPatient(onBoardPatientDto);
        return data;
    }
    async onBoardDoctor(onBoardDoctorDto) {
        const data = await this.authService.onBoardDoctor(onBoardDoctorDto);
        return data;
    }
    async onBoardAdmin(onBoardAdminDto) {
        const data = await this.authService.onBoardAdmin(onBoardAdminDto);
        return data;
    }
    async verifyEmail(verifyEmailDto) {
        const data = await this.authService.verifyEmail(verifyEmailDto);
        return data;
    }
    async requestVerificationEmail(email) {
        const data = await this.authService.requestEmailVerificationLink(email);
        return data;
    }
    async forgotPassword(email) {
        const data = await this.authService.forgotPassword(email);
        return data;
    }
    async resetPassword(resetPasswordDto) {
        const data = await this.authService.resetPassword(resetPasswordDto);
        return data;
    }
    async signIn(signInDto) {
        const data = await this.authService.signIn(signInDto);
        return data;
    }
    async refreshSesson(refreshToken) {
        const data = await this.authService.refreshSession(refreshToken);
        return data;
    }
    async changePassword(userId, changePasswordDto) {
        const data = await this.authService.changePassword(changePasswordDto, userId);
        return data;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/signup/patient'),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.OnBoardPatientDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "onBoardPatient", null);
__decorate([
    (0, common_1.Post)('/signup/doctor'),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.OnBoardDoctorDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "onBoardDoctor", null);
__decorate([
    (0, common_1.Post)('/signup/admin'),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.OnBoardAdminDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "onBoardAdmin", null);
__decorate([
    (0, common_1.Post)('/verify-email'),
    (0, auth_decorators_1.IsPublic)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_email_dto_1.VerifyEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('/verify-email/request'),
    (0, auth_decorators_1.IsPublic)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBody)({
        schema: { type: 'object', properties: { email: { type: 'string' } } },
    }),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "requestVerificationEmail", null);
__decorate([
    (0, common_1.Post)('/forgot-password'),
    (0, auth_decorators_1.IsPublic)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBody)({
        schema: { type: 'object', properties: { email: { type: 'string' } } },
    }),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('/reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('/signin'),
    (0, auth_decorators_1.IsPublic)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('/session/refresh'),
    (0, auth_decorators_1.IsPublic)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: { refreshToken: { type: 'string' } },
        },
    }),
    __param(0, (0, common_1.Body)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshSesson", null);
__decorate([
    (0, common_1.Put)('/change-password'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map