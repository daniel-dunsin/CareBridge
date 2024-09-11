"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaystackProvider = void 0;
const config_1 = require("@nestjs/config");
const paystack_sdk_1 = require("paystack-sdk");
exports.PaystackProvider = {
    provide: 'paystack',
    inject: [config_1.ConfigService],
    useFactory(configService) {
        const secretKey = configService.get('PAYSTACK_SECRET_KEY');
        return new paystack_sdk_1.Paystack(secretKey);
    },
};
//# sourceMappingURL=paystack.provider.js.map