import { ConsultationProvider } from '../providers/consultation.provider';
import { CardiologyConsultationReportDto, DentistryConsultationReportDto, DermatologyConsultationReportDto, HepatologyConsultationReportDto, NephrologyConsultationReportDto, NuerologyConsultationReportDto, OptometryConsultationReportDto, OrthopedicConsultationReportDto } from '../dto/submit-consultation.dto';
import { Departments } from 'src/api/doctor/enums';
export declare class ConsultationController {
    private readonly consultationProvider;
    constructor(consultationProvider: ConsultationProvider);
    createOrthopedicReport(appointmentId: string, orthopedicReportDto: OrthopedicConsultationReportDto): Promise<{
        success: boolean;
        message: string;
    }>;
    createNuerologyReport(appointmentId: string, neurologyReportDto: NuerologyConsultationReportDto): Promise<{
        success: boolean;
        message: string;
    }>;
    createOptometryReport(appointmentId: string, optometryReportDto: OptometryConsultationReportDto): Promise<{
        success: boolean;
        message: string;
    }>;
    createCardiologyReport(appointmentId: string, cardiologyReportDto: CardiologyConsultationReportDto): Promise<{
        success: boolean;
        message: string;
    }>;
    createNephrologyReport(appointmentId: string, nephrologyReportDto: NephrologyConsultationReportDto): Promise<{
        success: boolean;
        message: string;
    }>;
    createHepatologyReport(appointmentId: string, hepatologyReportDto: HepatologyConsultationReportDto): Promise<{
        success: boolean;
        message: string;
    }>;
    createDermatologyReport(appointmentId: string, dermatologyReportDto: DermatologyConsultationReportDto): Promise<{
        success: boolean;
        message: string;
    }>;
    createDentistryReport(appointmentId: string, dentistryReportDto: DentistryConsultationReportDto): Promise<{
        success: boolean;
        message: string;
    }>;
    getUserReports(department: Departments, userId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, any, any>[];
    }>;
    getPatientReports(department: Departments, patientId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, any, any>[];
    }>;
    getAppointmentReport(appointmentId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, any, any>;
    }>;
    getReport(department: Departments, reportId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, any, any>;
    }>;
}
