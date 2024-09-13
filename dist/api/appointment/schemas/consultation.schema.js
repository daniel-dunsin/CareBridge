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
exports.ConsultationSchema = exports.Consultation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const db_const_1 = require("../../../shared/constants/db.const");
const appointment_schema_1 = require("./appointment.schema");
const enums_1 = require("../enums");
const medicine_schema_1 = require("../../medicine/schemas/medicine.schema");
let Consultation = class Consultation {
};
exports.Consultation = Consultation;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: appointment_schema_1.Appointment.name }),
    __metadata("design:type", Object)
], Consultation.prototype, "appointment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, refPath: 'diagnosisRef' }),
    __metadata("design:type", Object)
], Consultation.prototype, "diagnosis", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: Object.values(enums_1.DiagnosisRef) }),
    __metadata("design:type", String)
], Consultation.prototype, "diagnosisRef", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Consultation.prototype, "consultationNote", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Consultation.prototype, "treatmentPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Consultation.prototype, "symptoms", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            medicines: {
                type: [
                    {
                        type: mongoose_2.Types.ObjectId,
                        ref: medicine_schema_1.Medicine.name,
                    },
                ],
            },
            prescriptionNote: {
                type: String,
            },
        },
        required: false,
    }),
    __metadata("design:type", Object)
], Consultation.prototype, "prescription", void 0);
exports.Consultation = Consultation = __decorate([
    (0, mongoose_1.Schema)(db_const_1.schemaOptions)
], Consultation);
exports.ConsultationSchema = mongoose_1.SchemaFactory.createForClass(Consultation);
//# sourceMappingURL=consultation.schema.js.map