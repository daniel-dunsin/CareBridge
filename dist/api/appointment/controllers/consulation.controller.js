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
exports.ConsultationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const consultation_provider_1 = require("../providers/consultation.provider");
const submit_consultation_dto_1 = require("../dto/submit-consultation.dto");
const auth_decorators_1 = require("../../../shared/decorators/auth.decorators");
const enums_1 = require("../../user/enums");
const pipes_1 = require("../../../core/pipes");
const enums_2 = require("../../doctor/enums");
let ConsultationController = class ConsultationController {
    constructor(consultationProvider) {
        this.consultationProvider = consultationProvider;
    }
    async createOrthopedicReport(appointmentId, orthopedicReportDto) {
        const data = await this.consultationProvider.createOrthopedicReport(orthopedicReportDto, appointmentId);
        return data;
    }
    async createNuerologyReport(appointmentId, neurologyReportDto) {
        const data = await this.consultationProvider.createNeurologyReport(neurologyReportDto, appointmentId);
        return data;
    }
    async createOptometryReport(appointmentId, optometryReportDto) {
        const data = await this.consultationProvider.createOptometryReport(optometryReportDto, appointmentId);
        return data;
    }
    async createCardiologyReport(appointmentId, cardiologyReportDto) {
        const data = await this.consultationProvider.createCardiologyReport(cardiologyReportDto, appointmentId);
        return data;
    }
    async createNephrologyReport(appointmentId, nephrologyReportDto) {
        const data = await this.consultationProvider.createNephrologyReport(nephrologyReportDto, appointmentId);
        return data;
    }
    async createHepatologyReport(appointmentId, hepatologyReportDto) {
        const data = await this.consultationProvider.createHepatologyReport(hepatologyReportDto, appointmentId);
        return data;
    }
    async createDermatologyReport(appointmentId, dermatologyReportDto) {
        const data = await this.consultationProvider.createDermatologyReport(dermatologyReportDto, appointmentId);
        return data;
    }
    async createDentistryReport(appointmentId, dentistryReportDto) {
        const data = await this.consultationProvider.createDentistryReport(dentistryReportDto, appointmentId);
        return data;
    }
    async getUserReports(department, userId) {
        const data = await this.consultationProvider.getReports(department, userId);
        return data;
    }
    async getPatientReports(department, patientId) {
        const data = await this.consultationProvider.getPatientReports(department, patientId);
        return data;
    }
    async getAppointmentReport(appointmentId) {
        const data = await this.consultationProvider.getAppoinmentReport(appointmentId);
        return data;
    }
    async getReport(department, reportId) {
        const data = await this.consultationProvider.getReport(reportId, department);
        return data;
    }
};
exports.ConsultationController = ConsultationController;
__decorate([
    (0, common_1.Post)('report/:appointmentId/orthopedic'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR]),
    __param(0, (0, common_1.Param)('appointmentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, submit_consultation_dto_1.OrthopedicConsultationReportDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "createOrthopedicReport", null);
__decorate([
    (0, common_1.Post)('report/:appointmentId/neurology'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR]),
    __param(0, (0, common_1.Param)('appointmentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, submit_consultation_dto_1.NuerologyConsultationReportDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "createNuerologyReport", null);
__decorate([
    (0, common_1.Post)('report/:appointmentId/optometry'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR]),
    __param(0, (0, common_1.Param)('appointmentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, submit_consultation_dto_1.OptometryConsultationReportDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "createOptometryReport", null);
__decorate([
    (0, common_1.Post)('report/:appointmentId/cardiology'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR, enums_1.RoleNames.PATIENT]),
    __param(0, (0, common_1.Param)('appointmentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, submit_consultation_dto_1.CardiologyConsultationReportDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "createCardiologyReport", null);
__decorate([
    (0, common_1.Post)('report/:appointmentId/nephrology'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR]),
    __param(0, (0, common_1.Param)('appointmentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, submit_consultation_dto_1.NephrologyConsultationReportDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "createNephrologyReport", null);
__decorate([
    (0, common_1.Post)('report/:appointmentId/hepatology'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR]),
    __param(0, (0, common_1.Param)('appointmentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, submit_consultation_dto_1.HepatologyConsultationReportDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "createHepatologyReport", null);
__decorate([
    (0, common_1.Post)('report/:appointmentId/dermatology'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR]),
    __param(0, (0, common_1.Param)('appointmentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, submit_consultation_dto_1.DermatologyConsultationReportDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "createDermatologyReport", null);
__decorate([
    (0, common_1.Post)('report/:appointmentId/dentistry'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR]),
    __param(0, (0, common_1.Param)('appointmentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, submit_consultation_dto_1.DentistryConsultationReportDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "createDentistryReport", null);
__decorate([
    (0, common_1.Get)('report/user/:department'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.PATIENT]),
    __param(0, (0, common_1.Param)('department')),
    __param(1, (0, auth_decorators_1.Auth)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "getUserReports", null);
__decorate([
    (0, common_1.Get)('report/patient/:patientId/:department'),
    __param(0, (0, common_1.Param)('department')),
    __param(1, (0, common_1.Param)('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "getPatientReports", null);
__decorate([
    (0, common_1.Get)('report/appointment/:appointmentId'),
    __param(0, (0, common_1.Param)('appointmentId', pipes_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "getAppointmentReport", null);
__decorate([
    (0, common_1.Get)('report/:department/:reportId'),
    __param(0, (0, common_1.Param)('department')),
    __param(1, (0, common_1.Param)('reportId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "getReport", null);
exports.ConsultationController = ConsultationController = __decorate([
    (0, common_1.Controller)('consultation'),
    (0, swagger_1.ApiTags)('consultation'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [consultation_provider_1.ConsultationProvider])
], ConsultationController);
//# sourceMappingURL=consulation.controller.js.map