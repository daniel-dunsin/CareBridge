import { Departments } from '../enums';
export declare class GetDoctorDto {
    search?: string;
    department: Departments;
    kycVerified?: string;
}
