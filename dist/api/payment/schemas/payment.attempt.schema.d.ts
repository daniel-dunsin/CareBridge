import { HydratedDocument, Types } from 'mongoose';
import { UserDocument } from 'src/api/user/schema/user.schema';
import { PaymentStatus } from '../enums';
export declare class PaymentAttempt {
    user: UserDocument | string;
    reference: string;
    status: PaymentStatus;
    amount: number;
    metadata: object;
}
export type PaymentAttemptDocument = HydratedDocument<PaymentAttempt>;
export declare const PaymentAttemptSchema: import("mongoose").Schema<PaymentAttempt, import("mongoose").Model<PaymentAttempt, any, any, any, import("mongoose").Document<unknown, any, PaymentAttempt> & PaymentAttempt & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PaymentAttempt, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PaymentAttempt>> & import("mongoose").FlatRecord<PaymentAttempt> & {
    _id: Types.ObjectId;
}>;
