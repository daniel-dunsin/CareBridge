import { Frequency } from 'src/api/diagnosis/enums';
export declare class PrescriptionsDto {
    medicines: string[];
    prescriptionNote: string;
}
export declare class BaseConsultationReport {
    consultationNote: string;
    treatmentPlan?: string;
    symptoms?: string;
    prescription: PrescriptionsDto;
    diagnosis: string;
    diagnosisRef: string;
    appointment: string;
}
export declare class OrthopedicConsultationReportDto extends BaseConsultationReport {
    boneHealthStatus: string;
    rangeOfMotion: number;
    totalFractures: number;
}
declare class CognitiveFunctionScore {
    lower: number;
    upper: number;
}
export declare class NuerologyConsultationReportDto extends BaseConsultationReport {
    brainHealthStatus: string;
    eegResults: string;
    congnitiveFunctionTestScore: CognitiveFunctionScore;
}
export declare class OptometryConsultationReportDto extends BaseConsultationReport {
    visionTestResult: string;
    ocularPressure: number;
    contactLensBaseCurve: number;
    contactLensDiameter: number;
}
export declare class CardiologyConsultationReportDto extends BaseConsultationReport {
    heartHealthStatus: string;
    heartRate: number;
    bloodPressureSystolic: number;
    bloodPressureDiastolic: number;
    bloodOxygenLevel: number;
    cholestrolTotal: number;
    cholestrolLDL: number;
    cholestrolHDL: number;
    ejectionFraction: number;
    cardiacOutput: number;
    bloodGlucoseLevel: number;
}
export declare class NephrologyConsultationReportDto extends BaseConsultationReport {
    kidneyHealthStatus: string;
    creatnine: number;
    BUN: number;
    urineProtein: number;
    dialysisHours: number;
    dialysisFrequency: Frequency;
}
export declare class HepatologyConsultationReportDto extends BaseConsultationReport {
    liverHealthStatus: string;
    altLevel: number;
    astLevel: number;
    bilirubin: number;
    fibrosisScore: number;
}
export declare class DermatologyConsultationReportDto extends BaseConsultationReport {
    skinHealthStatus: string;
    lesionCount: number;
    lesionSize: number;
    biopsyResults: string;
}
export declare class DentistryConsultationReportDto extends BaseConsultationReport {
    dentalHealthStatus: string;
    cavitiesCount: number;
    gumRecession: number;
    plaqueIndex: number;
    recentProcedures?: string;
}
export {};
