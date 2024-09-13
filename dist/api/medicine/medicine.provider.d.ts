import { CreateMedicineDto } from './dto/create-medicine.dto';
import { FileService } from 'src/shared/file/file.service';
import { MedicineService } from './medicine.service';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { GetMedicineDto } from './dto/get-medicine.dto';
export declare class MedicineProvider {
    private readonly fileService;
    private readonly medicineService;
    constructor(fileService: FileService, medicineService: MedicineService);
    createMedicine(createMedicineDto: CreateMedicineDto): Promise<{
        success: boolean;
        message: string;
        data: CreateMedicineDto;
    }>;
    updateMedicine(updateMedicineDto: UpdateMedicineDto, medicineId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/medicine.schema").Medicine> & import("./schemas/medicine.schema").Medicine & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getMedicine(medicineId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/medicine.schema").Medicine> & import("./schemas/medicine.schema").Medicine & {
            _id: import("mongoose").Types.ObjectId;
        };
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
    deleteMedicine(medicineId: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
