import { DoctorSpeciality } from 'src/api/doctor/enums';
import { Gender, RoleNames } from 'src/api/user/enums';
export declare class RegisterDto {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    gender: Gender;
    role: RoleNames;
}
export declare class OnBoardPatientDto extends RegisterDto {
}
export declare class OnBoardDoctorDto extends RegisterDto {
    yearsOfExperience: number;
    speciality: DoctorSpeciality;
    chargePerSession: number;
}
export declare class OnBoardAdminDto extends RegisterDto {
}
