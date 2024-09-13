import { HydratedDocument } from 'mongoose';
import { DbMixins } from 'src/shared/constants/db.const';
export declare class Medicine extends DbMixins {
    name: string;
    description: string;
    image: string;
    stock: number;
    price: number;
}
export type MedicineDocument = HydratedDocument<Medicine>;
export declare const MedicineSchema: import("mongoose").Schema<Medicine, import("mongoose").Model<Medicine, any, any, any, import("mongoose").Document<unknown, any, Medicine> & Medicine & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Medicine, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Medicine>> & import("mongoose").FlatRecord<Medicine> & {
    _id: import("mongoose").Types.ObjectId;
}>;
