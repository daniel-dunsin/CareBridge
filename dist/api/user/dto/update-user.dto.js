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
exports.BaseUpdateUserDto = exports.Address = void 0;
const enums_1 = require("../enums");
const decorators_1 = require("../../../shared/decorators");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class Address {
}
exports.Address = Address;
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
class BaseUpdateUserDto {
}
exports.BaseUpdateUserDto = BaseUpdateUserDto;
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], BaseUpdateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], BaseUpdateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], BaseUpdateUserDto.prototype, "country", void 0);
__decorate([
    (0, decorators_1.IsEnum)(enums_1.Gender, true),
    __metadata("design:type", String)
], BaseUpdateUserDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Address }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Address)
], BaseUpdateUserDto.prototype, "address", void 0);
//# sourceMappingURL=update-user.dto.js.map