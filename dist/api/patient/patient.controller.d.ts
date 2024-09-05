import { PatientProvider } from './patient.provider';
import { UpdatePatientDto } from './dto/update-patient.dto';
export declare class PatientController {
    private readonly patientProvider;
    constructor(patientProvider: PatientProvider);
    getUserPatient(userId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    getPatient(patientId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    updatePatient(userId: string, updatePatientDto: UpdatePatientDto): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    addFavDoc(userId: string, doctorId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    removeFavDoc(userId: string, doctorId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getUserPatientFavDocs(userId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    getPatientFavDocs(patientId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
}
