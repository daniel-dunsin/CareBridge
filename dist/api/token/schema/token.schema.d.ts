import { DbMixins } from 'src/shared/constants/db.const';
import { TokenTypes } from '../enums';
import { HydratedDocument } from 'mongoose';
export declare class Token extends DbMixins {
    email: string;
    value: string;
    type: TokenTypes;
}
export type TokenDocument = HydratedDocument<Token>;
export declare const TokenSchema: import("mongoose").Schema<Token, import("mongoose").Model<Token, any, any, any, import("mongoose").Document<unknown, any, Token> & Token & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Token, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Token>> & import("mongoose").FlatRecord<Token> & {
    _id: import("mongoose").Types.ObjectId;
}>;
