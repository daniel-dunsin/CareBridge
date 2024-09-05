"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsBase64 = exports.IsUrl = exports.IsDate = exports.IsEnum = exports.IsBoolean = exports.IsEmail = exports.IsNumber = exports.IsString = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const IsString = (isOptional) => {
    const decorators = [(0, class_validator_1.IsString)()];
    if (isOptional) {
        decorators.push((0, swagger_1.ApiPropertyOptional)());
        decorators.push((0, class_validator_1.IsOptional)());
    }
    else {
        decorators.push((0, swagger_1.ApiProperty)());
    }
    return (0, common_1.applyDecorators)(...decorators);
};
exports.IsString = IsString;
const IsNumber = (isOptional) => {
    const decorators = [(0, class_validator_1.IsNumberString)()];
    if (isOptional) {
        decorators.push((0, swagger_1.ApiPropertyOptional)({ example: 0 }));
        decorators.push((0, class_validator_1.IsOptional)());
    }
    else {
        decorators.push((0, swagger_1.ApiProperty)({ example: 0 }));
    }
    return (0, common_1.applyDecorators)(...decorators);
};
exports.IsNumber = IsNumber;
const IsEmail = (isOptional) => {
    const decorators = [(0, class_validator_1.IsEmail)()];
    if (isOptional) {
        decorators.push((0, swagger_1.ApiPropertyOptional)({ example: 'example@gmail.com' }));
        decorators.push((0, class_validator_1.IsOptional)());
    }
    else {
        decorators.push((0, swagger_1.ApiProperty)({ example: 'example@gmail.com' }));
    }
    return (0, common_1.applyDecorators)(...decorators);
};
exports.IsEmail = IsEmail;
const IsBoolean = (isOptional) => {
    const decorators = [(0, class_validator_1.IsBoolean)()];
    if (isOptional) {
        decorators.push((0, swagger_1.ApiPropertyOptional)());
        decorators.push((0, class_validator_1.IsOptional)());
    }
    else {
        decorators.push((0, swagger_1.ApiProperty)());
    }
    return (0, common_1.applyDecorators)(...decorators);
};
exports.IsBoolean = IsBoolean;
const IsEnum = (_enum, isOptional) => {
    const decorators = [(0, class_validator_1.IsEnum)(_enum)];
    if (isOptional) {
        decorators.push((0, swagger_1.ApiPropertyOptional)({ enum: _enum }));
        decorators.push((0, class_validator_1.IsOptional)());
    }
    else {
        decorators.push((0, swagger_1.ApiProperty)({ enum: _enum }));
    }
    return (0, common_1.applyDecorators)(...decorators);
};
exports.IsEnum = IsEnum;
const IsDate = (isOptional) => {
    const decorators = [(0, class_validator_1.IsDateString)()];
    if (isOptional) {
        decorators.push((0, swagger_1.ApiPropertyOptional)());
        decorators.push((0, class_validator_1.IsOptional)());
    }
    else {
        decorators.push((0, swagger_1.ApiProperty)());
    }
    return (0, common_1.applyDecorators)(...decorators);
};
exports.IsDate = IsDate;
const IsUrl = (isOptional) => {
    const decorators = [(0, class_validator_1.IsUrl)()];
    if (isOptional) {
        decorators.push((0, swagger_1.ApiPropertyOptional)());
        decorators.push((0, class_validator_1.IsOptional)());
    }
    else {
        decorators.push((0, swagger_1.ApiProperty)());
    }
    return (0, common_1.applyDecorators)(...decorators);
};
exports.IsUrl = IsUrl;
const IsBase64 = (isOptional) => {
    const decorators = [(0, class_validator_1.IsString)()];
    if (isOptional) {
        decorators.push((0, swagger_1.ApiPropertyOptional)({ example: 'base64' }));
        decorators.push((0, class_validator_1.IsOptional)());
    }
    else {
        decorators.push((0, swagger_1.ApiProperty)({ example: 'base64' }));
    }
    return (0, common_1.applyDecorators)(...decorators);
};
exports.IsBase64 = IsBase64;
//# sourceMappingURL=index.js.map