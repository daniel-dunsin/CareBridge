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
exports.KidneyMetricsSchema = exports.KidneyMetrics = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const patient_schema_1 = require("../../patient/schema/patient.schema");
const db_const_1 = require("../../../shared/constants/db.const");
const enums_1 = require("../enums");
let KidneyMetrics = class KidneyMetrics {
};
exports.KidneyMetrics = KidneyMetrics;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        required: true,
        ref: patient_schema_1.Patient.name,
    }),
    __metadata("design:type", Object)
], KidneyMetrics.prototype, "patient", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], KidneyMetrics.prototype, "kidneyHealthStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], KidneyMetrics.prototype, "creatinine", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], KidneyMetrics.prototype, "BUN", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], KidneyMetrics.prototype, "urineProtein", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], KidneyMetrics.prototype, "dialysisHours", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: Object.values(enums_1.Frequency) }),
    __metadata("design:type", String)
], KidneyMetrics.prototype, "dialysisFrequency", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        required: false,
        ref: 'Consultation',
    }),
    __metadata("design:type", Object)
], KidneyMetrics.prototype, "consultation", void 0);
exports.KidneyMetrics = KidneyMetrics = __decorate([
    (0, mongoose_1.Schema)(db_const_1.schemaOptions)
], KidneyMetrics);
exports.KidneyMetricsSchema = mongoose_1.SchemaFactory.createForClass(KidneyMetrics);
//# sourceMappingURL=kidney.schema.js.map