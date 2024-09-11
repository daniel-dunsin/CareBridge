"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModule = void 0;
const common_1 = require("@nestjs/common");
const payment_controller_1 = require("./payment.controller");
const payment_provider_1 = require("./providers/payment.provider");
const payment_service_1 = require("./services/payment.service");
const webhooks_service_1 = require("./services/webhooks.service");
const paystack_service_1 = require("./services/paystack.service");
const paystack_provider_1 = require("./providers/paystack.provider");
const mongoose_1 = require("@nestjs/mongoose");
const payment_attempt_schema_1 = require("./schemas/payment.attempt.schema");
const shared_module_1 = require("../../shared/shared.module");
const user_module_1 = require("../user/user.module");
const appointment_module_1 = require("../appointment/appointment.module");
let PaymentModule = class PaymentModule {
};
exports.PaymentModule = PaymentModule;
exports.PaymentModule = PaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: payment_attempt_schema_1.PaymentAttempt.name,
                    schema: payment_attempt_schema_1.PaymentAttemptSchema,
                },
            ]),
            shared_module_1.SharedModule,
            (0, common_1.forwardRef)(() => appointment_module_1.AppointmentModule),
            user_module_1.UserModule,
        ],
        controllers: [payment_controller_1.PaymentController],
        providers: [
            payment_provider_1.PaymentProvider,
            payment_service_1.PaymentService,
            webhooks_service_1.WebhookService,
            paystack_service_1.PaystackService,
            paystack_provider_1.PaystackProvider,
        ],
        exports: [payment_service_1.PaymentService, paystack_service_1.PaystackService],
    })
], PaymentModule);
//# sourceMappingURL=payment.module.js.map