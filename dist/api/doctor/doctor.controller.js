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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const doctor_provider_1 = require("./doctor.provider");
const auth_decorators_1 = require("../../shared/decorators/auth.decorators");
const pipes_1 = require("../../core/pipes");
const enums_1 = require("./enums");
const update_doctor_dto_1 = require("./dto/update-doctor.dto");
const kyc_verification_dto_1 = require("./dto/kyc-verification.dto");
const enums_2 = require("../user/enums");
const get_kyc_dto_1 = require("./dto/get-kyc.dto");
const get_doctor_dto_1 = require("./dto/get-doctor.dto");
let DoctorController = class DoctorController {
    constructor(doctorProvider) {
        this.doctorProvider = doctorProvider;
    }
    async getUserDoctor(userId) {
        const data = await this.doctorProvider.getUserDoctor(userId);
        return data;
    }
    async getSpecialities() {
        return {
            success: true,
            message: 'specialities fetched',
            data: Object.values(enums_1.DoctorSpeciality),
        };
    }
    async updateDoctor(userId, updateDoctorDto) {
        const data = await this.doctorProvider.updateDoctor(userId, updateDoctorDto);
        return data;
    }
    async updateKycInfo(userId, updateKycDto) {
        const data = await this.doctorProvider.updateKycDocuments(updateKycDto, userId);
        return data;
    }
    async getDoctorKyc(doctorId) {
        const data = await this.doctorProvider.getDoctorKyc(doctorId);
        return data;
    }
    async getKycIdTypes() {
        return {
            sucess: true,
            message: 'id types fetched',
            data: Object.values(enums_1.KycIdType),
        };
    }
    async verifyDoctorKyc(doctorId) {
        const data = await this.doctorProvider.verifyDoctorKyc(doctorId);
        return data;
    }
    async rejectDoctorKyc(doctorId) {
        const data = await this.doctorProvider.rejectDoctorKyc(doctorId);
        return data;
    }
    async getKycs(query) {
        const data = await this.doctorProvider.getKycs(query);
        return data;
    }
    async getDoctor(doctorId) {
        const data = await this.doctorProvider.getDoctor(doctorId);
        return data;
    }
    async getDoctors(query) {
        const data = await this.doctorProvider.getDoctors(query);
        return data;
    }
};
exports.DoctorController = DoctorController;
__decorate([
    (0, common_1.Get)('/user'),
    (0, auth_decorators_1.Roles)([enums_2.RoleNames.DOCTOR]),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getUserDoctor", null);
__decorate([
    (0, common_1.Get)('/specialities'),
    (0, swagger_1.ApiOperation)({ summary: 'get list of specializations' }),
    (0, auth_decorators_1.IsPublic)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getSpecialities", null);
__decorate([
    (0, common_1.Put)(),
    (0, auth_decorators_1.Roles)([enums_2.RoleNames.DOCTOR]),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_doctor_dto_1.UpdateDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "updateDoctor", null);
__decorate([
    (0, common_1.Put)('/kyc/update'),
    (0, auth_decorators_1.Roles)([enums_2.RoleNames.DOCTOR]),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, kyc_verification_dto_1.KycDocsDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "updateKycInfo", null);
__decorate([
    (0, common_1.Get)('/:doctorId/kyc'),
    (0, auth_decorators_1.Roles)([enums_2.RoleNames.DOCTOR, enums_2.RoleNames.ADMIN]),
    __param(0, (0, common_1.Param)('doctorId', pipes_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getDoctorKyc", null);
__decorate([
    (0, common_1.Get)('/kyc/id-types'),
    (0, auth_decorators_1.IsPublic)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getKycIdTypes", null);
__decorate([
    (0, common_1.Post)('/:doctorId/kyc/verify'),
    (0, auth_decorators_1.Roles)([enums_2.RoleNames.ADMIN]),
    __param(0, (0, common_1.Param)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "verifyDoctorKyc", null);
__decorate([
    (0, common_1.Post)('/:doctorId/kyc/reject'),
    (0, auth_decorators_1.Roles)([enums_2.RoleNames.ADMIN]),
    __param(0, (0, common_1.Param)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "rejectDoctorKyc", null);
__decorate([
    (0, common_1.Get)('/kyc'),
    (0, auth_decorators_1.Roles)([enums_2.RoleNames.ADMIN]),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_kyc_dto_1.GetKycDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getKycs", null);
__decorate([
    (0, common_1.Get)('/:doctorId'),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Param)('doctorId', pipes_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getDoctor", null);
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_doctor_dto_1.GetDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getDoctors", null);
exports.DoctorController = DoctorController = __decorate([
    (0, common_1.Controller)('/doctor'),
    (0, swagger_1.ApiTags)('doctor'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [doctor_provider_1.DoctorProvider])
], DoctorController);
//# sourceMappingURL=doctor.controller.js.map