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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const webhooks_service_1 = require("./services/webhooks.service");
const payment_provider_1 = require("./providers/payment.provider");
const auth_decorators_1 = require("../../shared/decorators/auth.decorators");
let PaymentController = class PaymentController {
    constructor(webhookService, paymentProvider) {
        this.webhookService = webhookService;
        this.paymentProvider = paymentProvider;
    }
    async webhook(req, res) {
        await this.webhookService.processWebhook(req);
        res.status(200).json({ message: 'webhook processed' });
    }
    async verifyTransaction(reference) {
        const data = await this.paymentProvider.verifyTransaction(reference);
        return data;
    }
};
exports.PaymentController = PaymentController;
__decorate([
    (0, common_1.Post)('/webhook'),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "webhook", null);
__decorate([
    (0, common_1.Get)('confirm/:reference'),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Param)('reference')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "verifyTransaction", null);
exports.PaymentController = PaymentController = __decorate([
    (0, common_1.Controller)('payment'),
    (0, swagger_1.ApiTags)('payment'),
    __metadata("design:paramtypes", [webhooks_service_1.WebhookService,
        payment_provider_1.PaymentProvider])
], PaymentController);
//# sourceMappingURL=payment.controller.js.map