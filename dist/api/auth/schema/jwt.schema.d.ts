import { HydratedDocument, Types } from 'mongoose';
import { UserDocument } from 'src/api/user/schema/user.schema';
import { Relations } from 'src/shared/constants/db.const';
import { JwtType } from '../enums/jwt.enum';
export declare class Jwt {
    token: string;
    user: Relations<UserDocument>;
    type: JwtType;
}
export type JwtDocument = HydratedDocument<Jwt>;
export declare const JwtSchema: import("mongoose").Schema<Jwt, import("mongoose").Model<Jwt, any, any, any, import("mongoose").Document<unknown, any, Jwt> & Jwt & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Jwt, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Jwt>> & import("mongoose").FlatRecord<Jwt> & {
    _id: Types.ObjectId;
}>;
