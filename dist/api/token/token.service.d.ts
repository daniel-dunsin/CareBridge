import { Token, TokenDocument } from './schema/token.schema';
import { Model } from 'mongoose';
import { CreateTokenDto, GetTokenDto } from './dto/create-token.dto';
export declare class TokenService {
    private readonly _tokenModel;
    constructor(_tokenModel: Model<TokenDocument>);
    findOrCreateToken(createTokenDto: CreateTokenDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Token> & Token & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Token> & Token & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getToken(getTokenDto: GetTokenDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Token> & Token & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Token> & Token & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
