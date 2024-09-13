import { OrderService } from './order.service';
import { PaymentService } from '../payment/services/payment.service';
import { CheckoutDto } from './dtos/checkout.dto';
import { UserDocument } from '../user/schema/user.schema';
import { MedicineService } from '../medicine/medicine.service';
import { PaystackService } from '../payment/services/paystack.service';
export declare class OrderProvider {
    private readonly orderService;
    private readonly paymentService;
    private readonly medicineService;
    private readonly paystackService;
    private deliveryFee;
    constructor(orderService: OrderService, paymentService: PaymentService, medicineService: MedicineService, paystackService: PaystackService);
    checkout(checkoutDto: CheckoutDto, user: UserDocument): Promise<string>;
}
