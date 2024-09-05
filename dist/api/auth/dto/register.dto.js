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
exports.OnBoardAdminDto = exports.OnBoardDoctorDto = exports.OnBoardPatientDto = exports.RegisterDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../../doctor/enums");
const enums_2 = require("../../user/enums");
const decorators_1 = require("../../../shared/decorators");
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, decorators_1.IsEmail)(false),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], RegisterDto.prototype, "firstName", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], RegisterDto.prototype, "lastName", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], RegisterDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, decorators_1.IsEnum)(enums_2.Gender, false),
    __metadata("design:type", String)
], RegisterDto.prototype, "gender", void 0);
class OnBoardPatientDto extends RegisterDto {
}
exports.OnBoardPatientDto = OnBoardPatientDto;
class OnBoardDoctorDto extends RegisterDto {
}
exports.OnBoardDoctorDto = OnBoardDoctorDto;
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], OnBoardDoctorDto.prototype, "yearsOfExperience", void 0);
__decorate([
    (0, decorators_1.IsEnum)(enums_1.DoctorSpeciality, false),
    __metadata("design:type", String)
], OnBoardDoctorDto.prototype, "speciality", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], OnBoardDoctorDto.prototype, "chargePerSession", void 0);
class OnBoardAdminDto extends RegisterDto {
}
exports.OnBoardAdminDto = OnBoardAdminDto;
//# sourceMappingURL=register.dto.js.map