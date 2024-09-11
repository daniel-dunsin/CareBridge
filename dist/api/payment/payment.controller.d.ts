import { WebhookResponse } from './interfaces';
import { Request, Response } from 'express';
import { WebhookService } from './services/webhooks.service';
import { PaymentProvider } from './providers/payment.provider';
export declare class PaymentController {
    private readonly webhookService;
    private readonly paymentProvider;
    constructor(webhookService: WebhookService, paymentProvider: PaymentProvider);
    webhook(req: Request<object, object, WebhookResponse>, res: Response): Promise<void>;
    verifyTransaction(reference: string): Promise<{
        message: string;
        success: boolean;
        data: import("mongoose").Document<unknown, {}, import("./schemas/payment.attempt.schema").PaymentAttempt> & import("./schemas/payment.attempt.schema").PaymentAttempt & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
