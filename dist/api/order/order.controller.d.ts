import { CheckoutDto } from './dtos/checkout.dto';
import { UserDocument } from '../user/schema/user.schema';
import { OrderProvider } from './order.provider';
export declare class OrderController {
    private readonly orderProvider;
    constructor(orderProvider: OrderProvider);
    checkout(checkoutDto: CheckoutDto, user: UserDocument): Promise<string>;
}
