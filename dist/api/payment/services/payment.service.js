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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const payment_attempt_schema_1 = require("../schemas/payment.attempt.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let PaymentService = class PaymentService {
    constructor(_paymentAttemptModel) {
        this._paymentAttemptModel = _paymentAttemptModel;
    }
    async createPaymentAttempt(createPaymentAttemptDto) {
        const data = await this._paymentAttemptModel.create(createPaymentAttemptDto);
        return data;
    }
    async getPaymentAttempt(filter) {
        return await this._paymentAttemptModel.findOne(filter);
    }
    async updatePaymentAttempt(filter, update) {
        return await this._paymentAttemptModel.findOneAndUpdate(filter, update, {
            new: true,
            runValidators: true,
        });
    }
    async getPaymentAttempts(filter) {
        return await this._paymentAttemptModel.find(filter);
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(payment_attempt_schema_1.PaymentAttempt.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PaymentService);
//# sourceMappingURL=payment.service.js.map