import { ConfigService } from '@nestjs/config';
import { Paystack } from 'paystack-sdk';
export declare class PaystackService {
    private readonly paystack;
    private readonly configService;
    constructor(paystack: Paystack, configService: ConfigService);
    initiateTransaction(data: {
        email: string;
        reference: string;
        amount: number;
        redirect_url?: string;
    }): Promise<string>;
}
