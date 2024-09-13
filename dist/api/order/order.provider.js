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
exports.OrderProvider = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const payment_service_1 = require("../payment/services/payment.service");
const uuid_1 = require("uuid");
const medicine_service_1 = require("../medicine/medicine.service");
const paystack_service_1 = require("../payment/services/paystack.service");
let OrderProvider = class OrderProvider {
    constructor(orderService, paymentService, medicineService, paystackService) {
        this.orderService = orderService;
        this.paymentService = paymentService;
        this.medicineService = medicineService;
        this.paystackService = paystackService;
        this.deliveryFee = 3000;
    }
    async checkout(checkoutDto, user) {
        const reference = `medicine-checkout-${(0, uuid_1.v4)()}`;
        const { data: medicines } = await this.medicineService.getMedicines({
            _id: { $in: checkoutDto.cart.map((cart) => cart.medicine) },
        });
        const total = checkoutDto.cart.reduce((acc, curr) => {
            const medicine = medicines.find((med) => String(med._id) === String(curr.medicine));
            acc += medicine.price * curr.qty;
            return acc;
        }, 0);
        const order = {
            cart: checkoutDto.cart,
            address: checkoutDto.address,
            totalAmount: total,
            deliveryFee: this.deliveryFee,
            orderNotes: checkoutDto.orderNotes,
        };
        const paymentLink = await this.paystackService.initiateTransaction({
            email: user.email,
            reference,
            amount: total + this.deliveryFee,
        });
        await this.paymentService.createPaymentAttempt({
            reference,
            amount: total + this.deliveryFee,
            user: user._id,
            metadata: order,
        });
        return paymentLink;
    }
};
exports.OrderProvider = OrderProvider;
exports.OrderProvider = OrderProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        payment_service_1.PaymentService,
        medicine_service_1.MedicineService,
        paystack_service_1.PaystackService])
], OrderProvider);
//# sourceMappingURL=order.provider.js.map