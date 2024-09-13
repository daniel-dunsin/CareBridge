"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const order_provider_1 = require("./order.provider");
const mongoose_1 = require("@nestjs/mongoose");
const order_schema_1 = require("./schemas/order.schema");
const payment_module_1 = require("../payment/payment.module");
const medicine_module_1 = require("../medicine/medicine.module");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: order_schema_1.Order.name,
                    useFactory: () => {
                        const schema = order_schema_1.OrderSchema;
                        return schema;
                    },
                },
            ]),
            (0, common_1.forwardRef)(() => payment_module_1.PaymentModule),
            medicine_module_1.MedicineModule,
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, order_provider_1.OrderProvider],
        exports: [order_service_1.OrderService, order_provider_1.OrderProvider],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map