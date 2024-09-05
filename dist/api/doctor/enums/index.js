"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KycStatus = exports.Days = exports.KycIdType = exports.SPECIALITY_TO_DEPARTMENT = exports.Departments = exports.DoctorSpeciality = void 0;
var DoctorSpeciality;
(function (DoctorSpeciality) {
    DoctorSpeciality["CARDIOLOGIST"] = "cardiologist";
    DoctorSpeciality["DENTIST"] = "dentist";
    DoctorSpeciality["NEUROLOGIST"] = "neurologist";
    DoctorSpeciality["ORTHOPEDIC"] = "orthopedic";
    DoctorSpeciality["OPTOMETRIST"] = "optometrist";
    DoctorSpeciality["PYSCHOTHERAPIST"] = "pyschotherapist";
    DoctorSpeciality["NEPHROLOGIST"] = "nephrologist";
    DoctorSpeciality["HEPATOLOGIST"] = "hepatologist";
    DoctorSpeciality["DERMATOLOGIST"] = "dermatolgist";
})(DoctorSpeciality || (exports.DoctorSpeciality = DoctorSpeciality = {}));
var Departments;
(function (Departments) {
    Departments["CARDIOLOGY"] = "Cardiology (Heart)";
    Departments["DENTISTRY"] = "Dentistry (Teeth and Oral Health)";
    Departments["NEUROLOGY"] = "Neurology (Nervous System)";
    Departments["ORTHOPEDICS"] = "Orthopedics (Musculoskeletal System)";
    Departments["OPTOMETRY"] = "Optometry (Eye and Vision Care)";
    Departments["PSYCHOTHERAPY"] = "Psychotherapy (Mental Health)";
    Departments["NEPHROLOGY"] = "Nephrology (Kidneys)";
    Departments["HEPATOLOGY"] = "Hepatology (Liver)";
    Departments["DERMATOLOGY"] = "Dermatology (Skin)";
})(Departments || (exports.Departments = Departments = {}));
exports.SPECIALITY_TO_DEPARTMENT = {
    [DoctorSpeciality.CARDIOLOGIST]: Departments.CARDIOLOGY,
    [DoctorSpeciality.DENTIST]: Departments.DENTISTRY,
    [DoctorSpeciality.NEUROLOGIST]: Departments.NEUROLOGY,
    [DoctorSpeciality.ORTHOPEDIC]: Departments.ORTHOPEDICS,
    [DoctorSpeciality.OPTOMETRIST]: Departments.OPTOMETRY,
    [DoctorSpeciality.PYSCHOTHERAPIST]: Departments.PSYCHOTHERAPY,
    [DoctorSpeciality.NEPHROLOGIST]: Departments.NEPHROLOGY,
    [DoctorSpeciality.HEPATOLOGIST]: Departments.HEPATOLOGY,
    [DoctorSpeciality.DERMATOLOGIST]: Departments.DERMATOLOGY,
};
var KycIdType;
(function (KycIdType) {
    KycIdType["NIC"] = "National Identification Card";
    KycIdType["INTERNATIONAL_PASSPORT"] = "International Passport";
    KycIdType["DRIVERS_LICENSE"] = "Drivers License";
    KycIdType["VOTERS_CARD"] = "Voters Card";
    KycIdType["TIN"] = "Tax Identification Number";
})(KycIdType || (exports.KycIdType = KycIdType = {}));
var Days;
(function (Days) {
    Days["MONDAY"] = "Monday";
    Days["TUESDAY"] = "Tuesday";
    Days["WEDNESDAY"] = "Wednesday";
    Days["THURSDAY"] = "Thursday";
    Days["FRIDAY"] = "Friday";
})(Days || (exports.Days = Days = {}));
var KycStatus;
(function (KycStatus) {
    KycStatus["PENDING"] = "pending";
    KycStatus["SUCCESSFUL"] = "successful";
    KycStatus["FAILED"] = "failed";
})(KycStatus || (exports.KycStatus = KycStatus = {}));
//# sourceMappingURL=index.js.map