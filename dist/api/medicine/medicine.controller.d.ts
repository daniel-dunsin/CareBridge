import { CreateMedicineDto } from './dto/create-medicine.dto';
import { MedicineProvider } from './medicine.provider';
import { GetMedicineDto } from './dto/get-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
export declare class MedicineController {
    private readonly medicineProvider;
    constructor(medicineProvider: MedicineProvider);
    createMedicine(createMedicineDto: CreateMedicineDto): Promise<{
        success: boolean;
        message: string;
        data: CreateMedicineDto;
    }>;
    getMedicines(query: GetMedicineDto): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schemas/medicine.schema").Medicine> & import("./schemas/medicine.schema").Medicine & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        meta: {
            page: number;
            count: number;
            totalPages: number;
        };
    }>;
    getMedicine(medicineId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/medicine.schema").Medicine> & import("./schemas/medicine.schema").Medicine & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateMedicine(medicineId: string, updateMedicineDto: UpdateMedicineDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/medicine.schema").Medicine> & import("./schemas/medicine.schema").Medicine & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteMedicine(medicineId: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
