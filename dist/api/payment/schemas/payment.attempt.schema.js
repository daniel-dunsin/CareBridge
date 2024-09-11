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
exports.PaymentAttemptSchema = exports.PaymentAttempt = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../user/schema/user.schema");
const db_const_1 = require("../../../shared/constants/db.const");
const enums_1 = require("../enums");
let PaymentAttempt = class PaymentAttempt {
};
exports.PaymentAttempt = PaymentAttempt;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: user_schema_1.User.name,
    }),
    __metadata("design:type", Object)
], PaymentAttempt.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PaymentAttempt.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: Object.values(enums_1.PaymentStatus),
        default: enums_1.PaymentStatus.PENDING,
    }),
    __metadata("design:type", String)
], PaymentAttempt.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PaymentAttempt.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Object,
    }),
    __metadata("design:type", Object)
], PaymentAttempt.prototype, "metadata", void 0);
exports.PaymentAttempt = PaymentAttempt = __decorate([
    (0, mongoose_1.Schema)(db_const_1.schemaOptions)
], PaymentAttempt);
exports.PaymentAttemptSchema = mongoose_1.SchemaFactory.createForClass(PaymentAttempt);
//# sourceMappingURL=payment.attempt.schema.js.map