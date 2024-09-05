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
exports.UpdateDoctorDto = exports.AvailableDay = exports.SocialLinks = void 0;
const decorators_1 = require("../../../shared/decorators");
const enums_1 = require("../enums");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const update_user_dto_1 = require("../../user/dto/update-user.dto");
class SocialLinks {
}
exports.SocialLinks = SocialLinks;
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], SocialLinks.prototype, "facebook", void 0);
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], SocialLinks.prototype, "whatsapp", void 0);
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], SocialLinks.prototype, "twitter", void 0);
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], SocialLinks.prototype, "linkedin", void 0);
class AvailableDay {
}
exports.AvailableDay = AvailableDay;
__decorate([
    (0, decorators_1.IsEnum)(enums_1.Days, false),
    __metadata("design:type", String)
], AvailableDay.prototype, "day", void 0);
__decorate([
    (0, decorators_1.IsDate)(false),
    __metadata("design:type", Date)
], AvailableDay.prototype, "startTime", void 0);
__decorate([
    (0, decorators_1.IsDate)(false),
    __metadata("design:type", Date)
], AvailableDay.prototype, "endTime", void 0);
class UpdateDoctorDto extends update_user_dto_1.BaseUpdateUserDto {
}
exports.UpdateDoctorDto = UpdateDoctorDto;
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], UpdateDoctorDto.prototype, "bio", void 0);
__decorate([
    (0, decorators_1.IsEnum)(enums_1.DoctorSpeciality, true),
    __metadata("design:type", String)
], UpdateDoctorDto.prototype, "speciality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: SocialLinks }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SocialLinks),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", SocialLinks)
], UpdateDoctorDto.prototype, "socials", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AvailableDay] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AvailableDay),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateDoctorDto.prototype, "availableDays", void 0);
__decorate([
    (0, decorators_1.IsBoolean)(true),
    __metadata("design:type", Boolean)
], UpdateDoctorDto.prototype, "isAvailable", void 0);
__decorate([
    (0, decorators_1.IsNumber)(true),
    __metadata("design:type", Number)
], UpdateDoctorDto.prototype, "chargePerSession", void 0);
//# sourceMappingURL=update-doctor.dto.js.map