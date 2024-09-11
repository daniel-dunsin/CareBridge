import { PaymentService } from '../services/payment.service';
export declare class PaymentProvider {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    verifyTransaction(reference: string): Promise<{
        message: string;
        success: boolean;
        data: import("mongoose").Document<unknown, {}, import("../schemas/payment.attempt.schema").PaymentAttempt> & import("../schemas/payment.attempt.schema").PaymentAttempt & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
