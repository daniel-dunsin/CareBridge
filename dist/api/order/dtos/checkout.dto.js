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
exports.CheckoutDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const decorators_1 = require("../../../shared/decorators");
class CartDto {
}
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], CartDto.prototype, "medicine", void 0);
__decorate([
    (0, decorators_1.IsNumber)(false),
    __metadata("design:type", Number)
], CartDto.prototype, "qty", void 0);
class AddressDto {
}
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], AddressDto.prototype, "state", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], AddressDto.prototype, "city", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], AddressDto.prototype, "country", void 0);
__decorate([
    (0, decorators_1.IsString)(false),
    __metadata("design:type", String)
], AddressDto.prototype, "streetAddress", void 0);
class CheckoutDto {
}
exports.CheckoutDto = CheckoutDto;
__decorate([
    (0, decorators_1.IsString)(true),
    __metadata("design:type", String)
], CheckoutDto.prototype, "orderNotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CartDto] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CartDto),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CheckoutDto.prototype, "cart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AddressDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => AddressDto),
    __metadata("design:type", AddressDto)
], CheckoutDto.prototype, "address", void 0);
//# sourceMappingURL=checkout.dto.js.map