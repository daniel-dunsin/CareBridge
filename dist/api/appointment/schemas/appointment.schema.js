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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentSchema = exports.Appointment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const patient_schema_1 = require("../../patient/schema/patient.schema");
const db_const_1 = require("../../../shared/constants/db.const");
const doctor_schema_1 = require("../../doctor/schema/doctor.schema");
const enums_1 = require("../enums");
const enums_2 = require("../../doctor/enums");
let Appointment = class Appointment {
};
exports.Appointment = Appointment;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: patient_schema_1.Patient.name,
        required: false,
    }),
    __metadata("design:type", Object)
], Appointment.prototype, "patient", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: doctor_schema_1.Doctor.name,
        required: true,
    }),
    __metadata("design:type", Object)
], Appointment.prototype, "doctor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Appointment.prototype, "appointmentDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: Object.values(enums_2.Departments) }),
    __metadata("design:type", String)
], Appointment.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Appointment.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Appointment.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(enums_1.AppointmentStatus),
        default: enums_1.AppointmentStatus.PENDING,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(enums_1.AppointmentMode),
        required: true,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "mode", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(enums_1.AppointmentStatus),
        default: enums_1.AppointmentStatus.PENDING,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "doctorStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(enums_1.AppointmentStatus),
        default: enums_1.AppointmentStatus.PENDING,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "patientStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "join_url", void 0);
exports.Appointment = Appointment = __decorate([
    (0, mongoose_1.Schema)(db_const_1.schemaOptions)
], Appointment);
exports.AppointmentSchema = mongoose_1.SchemaFactory.createForClass(Appointment);
//# sourceMappingURL=appointment.schema.js.map