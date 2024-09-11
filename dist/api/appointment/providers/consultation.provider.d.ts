import { ConsultationService } from '../services/consulation.service';
import { AppointmentService } from '../services/appointment.service';
import { MailService } from 'src/shared/mail/mail.service';
import { Connection, Types } from 'mongoose';
import { BaseConsultationReport, CardiologyConsultationReportDto, DentistryConsultationReportDto, DermatologyConsultationReportDto, HepatologyConsultationReportDto, NephrologyConsultationReportDto, NuerologyConsultationReportDto, OptometryConsultationReportDto, OrthopedicConsultationReportDto } from '../dto/submit-consultation.dto';
import { Departments } from 'src/api/doctor/enums';
import { DiagnosisService } from 'src/api/diagnosis/diagnosis.service';
import { AppointmentDocument } from '../schemas/appointment.schema';
import { PatientService } from 'src/api/patient/patient.service';
import { DiagnosisDocument } from '../types';
export declare class ConsultationProvider {
    private readonly connection;
    private readonly consultationService;
    private readonly appointmentService;
    private readonly mailService;
    private readonly diagnosisService;
    private readonly patientService;
    constructor(connection: Connection, consultationService: ConsultationService, appointmentService: AppointmentService, mailService: MailService, diagnosisService: DiagnosisService, patientService: PatientService);
    createConsultationReport(createConsultationDto: BaseConsultationReport, appointment: AppointmentDocument, diagnosis: DiagnosisDocument): Promise<{
        success: boolean;
        message: string;
    }>;
    createOrthopedicReport(orthopedicReportDto: OrthopedicConsultationReportDto, appointmentId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    createNeurologyReport(neurologyReportDto: NuerologyConsultationReportDto, appointmentId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    createOptometryReport(optometryReportDto: OptometryConsultationReportDto, appointmentId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    createCardiologyReport(cardiologyReportDto: CardiologyConsultationReportDto, appointmentId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    createNephrologyReport(nephrologyReportDto: NephrologyConsultationReportDto, appointmentId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    createHepatologyReport(hepatologyReportDto: HepatologyConsultationReportDto, appointmentId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    createDermatologyReport(dermatologyReportDto: DermatologyConsultationReportDto, appointmentId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    createDentistryReport(dentistryReportDto: DentistryConsultationReportDto, appointmentId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getPatientReports(department: Departments, patientId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, any, any>[];
    }>;
    getReports(department: Departments, userId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, any, any>[];
    }>;
    getReport(reportId: Types.ObjectId | string, department: Departments): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, any, any>;
    }>;
    getAppoinmentReport(appointmentId: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, any, any>;
    }>;
}
