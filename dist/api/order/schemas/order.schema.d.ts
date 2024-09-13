import { HydratedDocument, Types } from 'mongoose';
import { UserDocument } from 'src/api/user/schema/user.schema';
import { Cart } from './cart.schema';
import { Address } from './address.schema';
export declare class Order {
    user: UserDocument | string;
    cart: Cart[];
    address: Address;
    orderNotes: string;
    totalAmount: number;
    deliveryFee: number;
}
export type OrderDocument = HydratedDocument<Order>;
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, import("mongoose").Document<unknown, any, Order> & Order & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Order>> & import("mongoose").FlatRecord<Order> & {
    _id: Types.ObjectId;
}>;
