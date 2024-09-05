import { User, UserDocument } from './schema/user.schema';
import { FilterQuery, Model, QueryOptions, UpdateQuery } from 'mongoose';
export declare class UserService {
    private readonly _userModel;
    constructor(_userModel: Model<UserDocument>);
    createUser<T>(data: T): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getUser(filter: FilterQuery<UserDocument>): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getUsers(filter: FilterQuery<UserDocument>): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    updateUser(filter: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options?: QueryOptions<UserDocument>): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    deleteUser(filter: FilterQuery<UserDocument>, options?: QueryOptions<UserDocument>): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
