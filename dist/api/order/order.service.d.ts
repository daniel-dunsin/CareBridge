import { Order } from './schemas/order.schema';
import { FilterQuery, Model } from 'mongoose';
export declare class OrderService {
    private readonly _orderModel;
    constructor(_orderModel: Model<Order>);
    createOrder<T>(dto: T): Promise<import("mongoose").Document<unknown, {}, Order> & Order & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getOrder(filter: FilterQuery<Order>): Promise<import("mongoose").Document<unknown, {}, Order> & Order & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getOrders(filter: FilterQuery<Order>): Promise<(import("mongoose").Document<unknown, {}, Order> & Order & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
