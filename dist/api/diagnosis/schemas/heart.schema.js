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
exports.HeartMetricsSchema = exports.HeartMetrics = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const patient_schema_1 = require("../../patient/schema/patient.schema");
const db_const_1 = require("../../../shared/constants/db.const");
let HeartMetrics = class HeartMetrics {
};
exports.HeartMetrics = HeartMetrics;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        required: true,
        ref: patient_schema_1.Patient.name,
    }),
    __metadata("design:type", Object)
], HeartMetrics.prototype, "patient", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        required: false,
        ref: 'Consultation',
    }),
    __metadata("design:type", Object)
], HeartMetrics.prototype, "consultation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HeartMetrics.prototype, "heartHealthStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HeartMetrics.prototype, "heartRate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HeartMetrics.prototype, "bloodPressureSystolic", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HeartMetrics.prototype, "bloodPressureDiastolic", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HeartMetrics.prototype, "bloodOxygenLevel", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HeartMetrics.prototype, "cholesterolTotal", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HeartMetrics.prototype, "cholesterolLDL", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HeartMetrics.prototype, "cholesterolHDL", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HeartMetrics.prototype, "ejectionFraction", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HeartMetrics.prototype, "cardiacOutput", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HeartMetrics.prototype, "bloodGlucoseLevel", void 0);
exports.HeartMetrics = HeartMetrics = __decorate([
    (0, mongoose_1.Schema)(db_const_1.schemaOptions)
], HeartMetrics);
exports.HeartMetricsSchema = mongoose_1.SchemaFactory.createForClass(HeartMetrics);
//# sourceMappingURL=heart.schema.js.map