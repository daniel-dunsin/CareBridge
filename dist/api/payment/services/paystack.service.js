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
exports.PaystackService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const paystack_sdk_1 = require("paystack-sdk");
let PaystackService = class PaystackService {
    constructor(paystack, configService) {
        this.paystack = paystack;
        this.configService = configService;
    }
    async initiateTransaction(data) {
        const frontendUrl = this.configService.get('FRONTEND_URL');
        const response = await this.paystack.transaction.initialize({
            email: data.email,
            reference: data.reference,
            amount: JSON.stringify(parseInt(String(data.amount * 1.1 * 100))),
            callback_url: data.redirect_url
                ? `${frontendUrl}${data.redirect_url}`
                : `${frontendUrl}/payment/${data.reference}`,
            currency: 'NGN',
        });
        if (!response?.data || !response?.status) {
            throw new common_1.BadRequestException(`❌[paystack]: ${response?.message}`);
        }
        return response.data.authorization_url;
    }
};
exports.PaystackService = PaystackService;
exports.PaystackService = PaystackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('paystack')),
    __metadata("design:paramtypes", [paystack_sdk_1.Paystack,
        config_1.ConfigService])
], PaystackService);
//# sourceMappingURL=paystack.service.js.map