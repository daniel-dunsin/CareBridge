export declare enum DoctorSpeciality {
    CARDIOLOGIST = "cardiologist",
    DENTIST = "dentist",
    NEUROLOGIST = "neurologist",
    ORTHOPEDIC = "orthopedic",
    OPTOMETRIST = "optometrist",
    PYSCHOTHERAPIST = "pyschotherapist",
    NEPHROLOGIST = "nephrologist",
    HEPATOLOGIST = "hepatologist",
    DERMATOLOGIST = "dermatolgist"
}
export declare enum Departments {
    CARDIOLOGY = "Cardiology (Heart)",
    DENTISTRY = "Dentistry (Teeth and Oral Health)",
    NEUROLOGY = "Neurology (Nervous System)",
    ORTHOPEDICS = "Orthopedics (Musculoskeletal System)",
    OPTOMETRY = "Optometry (Eye and Vision Care)",
    PSYCHOTHERAPY = "Psychotherapy (Mental Health)",
    NEPHROLOGY = "Nephrology (Kidneys)",
    HEPATOLOGY = "Hepatology (Liver)",
    DERMATOLOGY = "Dermatology (Skin)"
}
export declare const SPECIALITY_TO_DEPARTMENT: {
    [key in DoctorSpeciality]: Departments;
};
export declare enum KycIdType {
    NIC = "National Identification Card",
    INTERNATIONAL_PASSPORT = "International Passport",
    DRIVERS_LICENSE = "Drivers License",
    VOTERS_CARD = "Voters Card",
    TIN = "Tax Identification Number"
}
export declare enum Days {
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday"
}
export declare enum KycStatus {
    PENDING = "pending",
    SUCCESSFUL = "successful",
    FAILED = "failed"
}
