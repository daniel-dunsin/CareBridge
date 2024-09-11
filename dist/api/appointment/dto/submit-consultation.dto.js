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
exports.DentistryConsultationReportDto = exports.DermatologyConsultationReportDto = exports.HepatologyConsultationReportDto = exports.NephrologyConsultationReportDto = exports.CardiologyConsultationReportDto = exports.OptometryConsultationReportDto = exports.NuerologyConsultationReportDto = exports.OrthopedicConsultationReportDto = exports.BaseConsultationReport = exports.PrescriptionsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../diagnosis/enums");
const decorators_1 = require("../../../shared/decorators");
class PrescriptionsDto {
}
exports.PrescriptionsDto = PrescriptionsDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], PrescriptionsDto.prototype, "medicines", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], PrescriptionsDto.prototype, "prescriptionNote", void 0);
class BaseConsultationReport {
}
exports.BaseConsultationReport = BaseConsultationReport;
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], BaseConsultationReport.prototype, "consultationNote", void 0);
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], BaseConsultationReport.prototype, "treatmentPlan", void 0);
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], BaseConsultationReport.prototype, "symptoms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PrescriptionsDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PrescriptionsDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", PrescriptionsDto)
], BaseConsultationReport.prototype, "prescription", void 0);
class OrthopedicConsultationReportDto extends BaseConsultationReport {
}
exports.OrthopedicConsultationReportDto = OrthopedicConsultationReportDto;
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], OrthopedicConsultationReportDto.prototype, "boneHealthStatus", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], OrthopedicConsultationReportDto.prototype, "rangeOfMotion", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], OrthopedicConsultationReportDto.prototype, "totalFractures", void 0);
class CognitiveFunctionScore {
}
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CognitiveFunctionScore.prototype, "lower", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CognitiveFunctionScore.prototype, "upper", void 0);
class NuerologyConsultationReportDto extends BaseConsultationReport {
}
exports.NuerologyConsultationReportDto = NuerologyConsultationReportDto;
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], NuerologyConsultationReportDto.prototype, "brainHealthStatus", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", String)
], NuerologyConsultationReportDto.prototype, "eegResults", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CognitiveFunctionScore }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CognitiveFunctionScore),
    __metadata("design:type", CognitiveFunctionScore)
], NuerologyConsultationReportDto.prototype, "congnitiveFunctionTestScore", void 0);
class OptometryConsultationReportDto extends BaseConsultationReport {
}
exports.OptometryConsultationReportDto = OptometryConsultationReportDto;
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], OptometryConsultationReportDto.prototype, "visionTestResult", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], OptometryConsultationReportDto.prototype, "ocularPressure", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], OptometryConsultationReportDto.prototype, "contactLensBaseCurve", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], OptometryConsultationReportDto.prototype, "contactLensDiameter", void 0);
class CardiologyConsultationReportDto extends BaseConsultationReport {
}
exports.CardiologyConsultationReportDto = CardiologyConsultationReportDto;
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], CardiologyConsultationReportDto.prototype, "heartHealthStatus", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CardiologyConsultationReportDto.prototype, "heartRate", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CardiologyConsultationReportDto.prototype, "bloodPressureSystolic", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CardiologyConsultationReportDto.prototype, "bloodPressureDiastolic", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CardiologyConsultationReportDto.prototype, "bloodOxygenLevel", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CardiologyConsultationReportDto.prototype, "cholestrolTotal", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CardiologyConsultationReportDto.prototype, "cholestrolLDL", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CardiologyConsultationReportDto.prototype, "cholestrolHDL", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CardiologyConsultationReportDto.prototype, "ejectionFraction", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CardiologyConsultationReportDto.prototype, "cardiacOutput", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CardiologyConsultationReportDto.prototype, "bloodGlucoseLevel", void 0);
class NephrologyConsultationReportDto extends BaseConsultationReport {
}
exports.NephrologyConsultationReportDto = NephrologyConsultationReportDto;
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], NephrologyConsultationReportDto.prototype, "kidneyHealthStatus", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], NephrologyConsultationReportDto.prototype, "creatnine", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], NephrologyConsultationReportDto.prototype, "BUN", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], NephrologyConsultationReportDto.prototype, "urineProtein", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], NephrologyConsultationReportDto.prototype, "dialysisHours", void 0);
__decorate([
    (0, decorators_1.IsEnum)(enums_1.Frequency, false),
    __metadata("design:type", String)
], NephrologyConsultationReportDto.prototype, "dialysisFrequency", void 0);
class HepatologyConsultationReportDto extends BaseConsultationReport {
}
exports.HepatologyConsultationReportDto = HepatologyConsultationReportDto;
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], HepatologyConsultationReportDto.prototype, "liverHealthStatus", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], HepatologyConsultationReportDto.prototype, "altLevel", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], HepatologyConsultationReportDto.prototype, "astLevel", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], HepatologyConsultationReportDto.prototype, "bilirubin", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], HepatologyConsultationReportDto.prototype, "fibrosisScore", void 0);
class DermatologyConsultationReportDto extends BaseConsultationReport {
}
exports.DermatologyConsultationReportDto = DermatologyConsultationReportDto;
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], DermatologyConsultationReportDto.prototype, "skinHealthStatus", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], DermatologyConsultationReportDto.prototype, "lesionCount", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], DermatologyConsultationReportDto.prototype, "lesionSize", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], DermatologyConsultationReportDto.prototype, "biopsyResults", void 0);
class DentistryConsultationReportDto extends BaseConsultationReport {
}
exports.DentistryConsultationReportDto = DentistryConsultationReportDto;
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], DentistryConsultationReportDto.prototype, "dentalHealthStatus", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], DentistryConsultationReportDto.prototype, "cavitiesCount", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], DentistryConsultationReportDto.prototype, "gumRecession", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], DentistryConsultationReportDto.prototype, "plaqueIndex", void 0);
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], DentistryConsultationReportDto.prototype, "recentProcedures", void 0);
//# sourceMappingURL=submit-consultation.dto.js.map