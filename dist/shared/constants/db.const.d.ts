import { Schema } from 'mongoose';
export declare class DbMixins {
    createdAt: Date;
    updatedAt: Date;
}
export type Relations<T = any> = Schema.Types.ObjectId | string | T;
export type Nullable<T> = null | T;
export declare const schemaOptions: {
    timestamps: boolean;
    virtuals: boolean;
    toJSON: {
        virtuals: boolean;
    };
    toObject: {
        virtuals: boolean;
    };
};
