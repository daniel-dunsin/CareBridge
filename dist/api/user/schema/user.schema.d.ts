import { HydratedDocument } from 'mongoose';
import { DbMixins } from 'src/shared/constants/db.const';
import { Gender, RoleNames } from '../enums';
import { Address } from './address.schema';
export declare class User extends DbMixins {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    password?: string;
    emailVerified: boolean;
    gender: Gender;
    profilePicture: string;
    profilePictureId: string;
    role: RoleNames;
    address: Address;
}
export type UserDocument = HydratedDocument<User>;
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
}>;
