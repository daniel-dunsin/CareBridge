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
exports.GetDoctorDto = void 0;
const decorators_1 = require("../../../shared/decorators");
const enums_1 = require("../enums");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class GetDoctorDto {
}
exports.GetDoctorDto = GetDoctorDto;
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], GetDoctorDto.prototype, "search", void 0);
__decorate([
    (0, decorators_1.IsEnum)(enums_1.Departments, true),
    __metadata("design:type", String)
], GetDoctorDto.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsBooleanString)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetDoctorDto.prototype, "kycVerified", void 0);
//# sourceMappingURL=get-doctor.dto.js.map