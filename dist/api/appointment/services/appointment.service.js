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
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const appointment_schema_1 = require("../schemas/appointment.schema");
const mongoose_2 = require("mongoose");
let AppointmentService = class AppointmentService {
    constructor(_appointmentModel) {
        this._appointmentModel = _appointmentModel;
    }
    async populate(model) {
        return await model.populate([
            { path: 'doctor', populate: [{ path: 'user' }] },
            { path: 'patient', populate: [{ path: 'user' }] },
        ]);
    }
    async createAppointment(createAppointmentDto) {
        const appointment = await this._appointmentModel.create(createAppointmentDto);
        return appointment;
    }
    async updateAppointment(filter, update, options) {
        const appointment = await this.populate(this._appointmentModel.findOneAndUpdate(filter, update, {
            new: true,
            runValidators: true,
            ...options,
        }));
        return appointment;
    }
    async getAppointments(filter) {
        const appointments = await this.populate(this._appointmentModel.find(filter).sort({ createdAt: -1 }));
        return appointments;
    }
    async getAppointment(filter) {
        const appointment = await this.populate(this._appointmentModel.findOne(filter));
        return appointment;
    }
    async deleteAppointment(filter, options) {
        const appointment = await this._appointmentModel.findOneAndDelete(filter, options);
        return appointment;
    }
};
exports.AppointmentService = AppointmentService;
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(appointment_schema_1.Appointment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map