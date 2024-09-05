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
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const patient_provider_1 = require("./patient.provider");
const auth_decorators_1 = require("../../shared/decorators/auth.decorators");
const pipes_1 = require("../../core/pipes");
const update_patient_dto_1 = require("./dto/update-patient.dto");
const enums_1 = require("../user/enums");
let PatientController = class PatientController {
    constructor(patientProvider) {
        this.patientProvider = patientProvider;
    }
    async getUserPatient(userId) {
        console.log(userId);
        const data = await this.patientProvider.getUserPatient(userId);
        return data;
    }
    async getPatient(patientId) {
        const data = await this.patientProvider.getPatient(patientId);
        return data;
    }
    async updatePatient(userId, updatePatientDto) {
        const data = await this.patientProvider.updatePatient(updatePatientDto, userId);
        return data;
    }
    async addFavDoc(userId, doctorId) {
        const data = await this.patientProvider.addFavDoc(doctorId, userId);
        return data;
    }
    async removeFavDoc(userId, doctorId) {
        const data = await this.patientProvider.removeFavDoc(doctorId, userId);
        return data;
    }
    async getUserPatientFavDocs(userId) {
        const data = await this.patientProvider.getUserFavDoctors(userId);
        return data;
    }
    async getPatientFavDocs(patientId) {
        const data = await this.patientProvider.getFavDoctors(patientId);
        return data;
    }
};
exports.PatientController = PatientController;
__decorate([
    (0, common_1.Get)('/user'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.PATIENT]),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getUserPatient", null);
__decorate([
    (0, common_1.Get)(':patientId'),
    __param(0, (0, common_1.Param)('patientId', pipes_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getPatient", null);
__decorate([
    (0, common_1.Put)(),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.PATIENT]),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_patient_dto_1.UpdatePatientDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updatePatient", null);
__decorate([
    (0, common_1.Post)('/favourite/doctor/:doctorId'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.PATIENT]),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __param(1, (0, common_1.Param)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "addFavDoc", null);
__decorate([
    (0, common_1.Delete)('/favourite/doctor/:doctorId'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.PATIENT]),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __param(1, (0, common_1.Param)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "removeFavDoc", null);
__decorate([
    (0, common_1.Get)('/user/favourite/doctor'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.PATIENT]),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getUserPatientFavDocs", null);
__decorate([
    (0, common_1.Get)('/:patientId/favourite/doctor'),
    __param(0, (0, common_1.Param)('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getPatientFavDocs", null);
exports.PatientController = PatientController = __decorate([
    (0, common_1.Controller)('patient'),
    (0, swagger_1.ApiTags)('patient'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [patient_provider_1.PatientProvider])
], PatientController);
//# sourceMappingURL=patient.controller.js.map