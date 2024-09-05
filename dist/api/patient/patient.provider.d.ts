import { PatientService } from './patient.service';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { UserService } from '../user/user.service';
export declare class PatientProvider {
    private readonly patientService;
    private readonly userService;
    constructor(patientService: PatientService, userService: UserService);
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
    updatePatient(updatePatientDto: UpdatePatientDto, userId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    addFavDoc(doctorId: string, userId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    removeFavDoc(doctorId: string, userId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getFavDoctors(patientId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    getUserFavDoctors(userId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
}
