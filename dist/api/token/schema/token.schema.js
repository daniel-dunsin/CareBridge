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
exports.TokenSchema = exports.Token = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const db_const_1 = require("../../../shared/constants/db.const");
const regex_const_1 = require("../../../shared/constants/regex.const");
const enums_1 = require("../enums");
let Token = class Token extends db_const_1.DbMixins {
};
exports.Token = Token;
__decorate([
    (0, mongoose_1.Prop)({ required: true, match: regex_const_1.default.email }),
    __metadata("design:type", String)
], Token.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Token.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: Object.values(enums_1.TokenTypes), required: true }),
    __metadata("design:type", String)
], Token.prototype, "type", void 0);
exports.Token = Token = __decorate([
    (0, mongoose_1.Schema)(db_const_1.schemaOptions)
], Token);
exports.TokenSchema = mongoose_1.SchemaFactory.createForClass(Token);
//# sourceMappingURL=token.schema.js.map