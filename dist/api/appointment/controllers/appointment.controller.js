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
exports.AppointmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../../../shared/decorators/auth.decorators");
const book_appointment_dto_1 = require("../dto/book-appointment.dto");
const appointment_provider_1 = require("../providers/appointment.provider");
const enums_1 = require("../../user/enums");
const pipes_1 = require("../../../core/pipes");
const update_appointment_dto_1 = require("../dto/update-appointment.dto");
let AppointmentController = class AppointmentController {
    constructor(appointmentProvider) {
        this.appointmentProvider = appointmentProvider;
    }
    async bookSession(user, doctorId, bookSessionDto) {
        const data = await this.appointmentProvider.bookSession(bookSessionDto, doctorId, user);
        return data;
    }
    async getDoctorAppointments(doctorId) {
        const data = await this.appointmentProvider.getDoctorAppointments(doctorId);
        return data;
    }
    async getUserDoctorAppointments(userId) {
        const data = await this.appointmentProvider.getUserDoctorAppointments(userId);
        return data;
    }
    async getPatientAppointments(patientId) {
        const data = await this.appointmentProvider.getPatientAppointments(patientId);
        return data;
    }
    async getUserPatientAppointments(userId) {
        const data = await this.appointmentProvider.getUserPatientAppointments(userId);
        return data;
    }
    async getUserAppointments(user) {
        const data = await this.appointmentProvider.getUserAppointments(user);
        return data;
    }
    async getUserPendingAppointments(user) {
        const data = await this.appointmentProvider.getUserPendingAppointments(user);
        return data;
    }
    async rescheduleAppointment(sessionDto, appointmentId, user) {
        const data = await this.appointmentProvider.rescheduleAppointment(sessionDto, appointmentId, user);
        return data;
    }
    async cancelAppointment(appointmentId, user) {
        const data = await this.appointmentProvider.cancelAppointment(appointmentId, user);
        return data;
    }
    async getAppointment(appointmentId) {
        const data = await this.appointmentProvider.getAppointment(appointmentId);
        return data;
    }
    async updateAppointmentStatus(updateStatusDto, appointmentId, user) {
        const data = await this.appointmentProvider.updateAppointmentStatus(updateStatusDto.status, appointmentId, user);
        return data;
    }
    async generateMeetingLink(appointmentId, join_url) {
        const data = await this.appointmentProvider.createMeetingLink(appointmentId, join_url);
        return data;
    }
};
exports.AppointmentController = AppointmentController;
__decorate([
    (0, common_1.Post)('/:doctorId/book'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR, enums_1.RoleNames.PATIENT]),
    __param(0, (0, auth_decorators_1.Auth)()),
    __param(1, (0, common_1.Param)('doctorId', pipes_1.MongoIdPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, book_appointment_dto_1.BookSessionDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "bookSession", null);
__decorate([
    (0, common_1.Get)('/doctor/:doctorId'),
    __param(0, (0, common_1.Param)('doctorId', pipes_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getDoctorAppointments", null);
__decorate([
    (0, common_1.Get)('/doctor/user'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR]),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getUserDoctorAppointments", null);
__decorate([
    (0, common_1.Get)('/patient/:patientId'),
    __param(0, (0, common_1.Param)('patientId', pipes_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getPatientAppointments", null);
__decorate([
    (0, common_1.Get)('/patient/user'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.PATIENT]),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getUserPatientAppointments", null);
__decorate([
    (0, common_1.Get)('/user'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.PATIENT, enums_1.RoleNames.DOCTOR]),
    __param(0, (0, auth_decorators_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getUserAppointments", null);
__decorate([
    (0, common_1.Get)('/user/pending'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.PATIENT, enums_1.RoleNames.DOCTOR]),
    __param(0, (0, auth_decorators_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getUserPendingAppointments", null);
__decorate([
    (0, common_1.Put)('/:appointmentId/reschedule'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR, enums_1.RoleNames.PATIENT]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('appointmentId')),
    __param(2, (0, auth_decorators_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_appointment_dto_1.SessionDto, String, Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "rescheduleAppointment", null);
__decorate([
    (0, common_1.Put)('/:appointmentId/cancel'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR, enums_1.RoleNames.PATIENT]),
    __param(0, (0, common_1.Param)('appointmentId')),
    __param(1, (0, auth_decorators_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "cancelAppointment", null);
__decorate([
    (0, common_1.Get)('/:appointmentId'),
    __param(0, (0, common_1.Param)('appointmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getAppointment", null);
__decorate([
    (0, common_1.Put)('/:appointmentId/status'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR, enums_1.RoleNames.PATIENT]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('appointmentId')),
    __param(2, (0, auth_decorators_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_appointment_dto_1.UpdateAppointmentStatusDto, String, Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "updateAppointmentStatus", null);
__decorate([
    (0, common_1.Put)('/:appointmentId/meeting-link'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.DOCTOR, enums_1.RoleNames.PATIENT]),
    __param(0, (0, common_1.Param)('appointmentId')),
    __param(1, (0, common_1.Body)('join_url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "generateMeetingLink", null);
exports.AppointmentController = AppointmentController = __decorate([
    (0, common_1.Controller)('appointment'),
    (0, swagger_1.ApiTags)('appointment'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [appointment_provider_1.AppointmentProvider])
], AppointmentController);
//# sourceMappingURL=appointment.controller.js.map