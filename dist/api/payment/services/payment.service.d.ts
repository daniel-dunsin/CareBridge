import { PaymentAttempt } from '../schemas/payment.attempt.schema';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
export declare class PaymentService {
    private readonly _paymentAttemptModel;
    constructor(_paymentAttemptModel: Model<PaymentAttempt>);
    createPaymentAttempt<T>(createPaymentAttemptDto: T): Promise<import("mongoose").Document<unknown, {}, PaymentAttempt> & PaymentAttempt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getPaymentAttempt(filter: FilterQuery<PaymentAttempt>): Promise<import("mongoose").Document<unknown, {}, PaymentAttempt> & PaymentAttempt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePaymentAttempt(filter: FilterQuery<PaymentAttempt>, update: UpdateQuery<PaymentAttempt>): Promise<import("mongoose").Document<unknown, {}, PaymentAttempt> & PaymentAttempt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getPaymentAttempts(filter: FilterQuery<PaymentAttempt>): Promise<(import("mongoose").Document<unknown, {}, PaymentAttempt> & PaymentAttempt & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
