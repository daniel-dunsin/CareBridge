import { Medicine, MedicineDocument } from './schemas/medicine.schema';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { PaginationQuery } from 'src/shared/interfaces/pagination.interface';
import { UtilService } from 'src/shared/services/utils.service';
export declare class MedicineService {
    private readonly _medicineModel;
    private readonly utilService;
    constructor(_medicineModel: Model<Medicine>, utilService: UtilService);
    createMedicine<T>(data: T): Promise<T>;
    getMedicine(filter: FilterQuery<MedicineDocument>): Promise<import("mongoose").Document<unknown, {}, Medicine> & Medicine & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getMedicines(filter: FilterQuery<MedicineDocument>, paginationQuery?: PaginationQuery): Promise<{
        data: (import("mongoose").Document<unknown, {}, Medicine> & Medicine & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        page: number;
        totalPages: number;
        count: number;
    }>;
    updateMedicine(filter: FilterQuery<MedicineDocument>, update: UpdateQuery<MedicineDocument>): Promise<import("mongoose").Document<unknown, {}, Medicine> & Medicine & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteMedicine(filter: FilterQuery<MedicineDocument>): Promise<import("mongoose").Document<unknown, {}, Medicine> & Medicine & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
