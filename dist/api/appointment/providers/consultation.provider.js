'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ConsultationProvider = void 0;
const common_1 = require('@nestjs/common');
const consulation_service_1 = require('../services/consulation.service');
const appointment_service_1 = require('../services/appointment.service');
const mail_service_1 = require('../../../shared/mail/mail.service');
const mongoose_1 = require('@nestjs/mongoose');
const mongoose_2 = require('mongoose');
const enums_1 = require('../../doctor/enums');
const diagnosis_service_1 = require('../../diagnosis/diagnosis.service');
const enums_2 = require('../enums');
const patient_service_1 = require('../../patient/patient.service');
let ConsultationProvider = class ConsultationProvider {
  constructor(
    connection,
    consultationService,
    appointmentService,
    mailService,
    diagnosisService,
    patientService,
  ) {
    this.connection = connection;
    this.consultationService = consultationService;
    this.appointmentService = appointmentService;
    this.mailService = mailService;
    this.diagnosisService = diagnosisService;
    this.patientService = patientService;
  }
  async createConsultationReport(
    createConsultationDto,
    appointment,
    diagnosis,
  ) {
    const consultation = await this.consultationService.createConsultation(
      createConsultationDto,
    );
    await this.mailService.sendMail({
      to: appointment.patient.user.email,
      subject: `CareBridge: Dr. ${appointment.doctor.user.firstName} Consultation Report`,
      template: 'consultation-report-submitted',
      context: {
        patientName: appointment.patient.user.firstName,
        doctorName: appointment.doctor.user.firstName,
        department: appointment.department,
        prescription: consultation.prescription,
      },
    });
    diagnosis.consultation = String(consultation._id);
    await diagnosis.save();
    return {
      success: true,
      message: 'consultation created',
    };
  }
  async createOrthopedicReport(orthopedicReportDto, appointmentId) {
    const appointment = await this.appointmentService.getAppointment({
      _id: appointmentId,
    });
    if (!appointment)
      throw new common_1.NotFoundException('Appointment not found');
    const diagnosis = await this.diagnosisService.createDiagnosis(
      { ...orthopedicReportDto, patient: appointment.patient._id },
      enums_1.Departments.ORTHOPEDICS,
    );
    orthopedicReportDto.appointment = String(appointment._id);
    orthopedicReportDto.diagnosis = String(diagnosis._id);
    orthopedicReportDto.diagnosisRef = enums_2.DiagnosisRef['BONE_METRICS'];
    const response = await this.createConsultationReport(
      orthopedicReportDto,
      appointment,
      diagnosis,
    );
    return response;
  }
  async createNeurologyReport(neurologyReportDto, appointmentId) {
    const appointment = await this.appointmentService.getAppointment({
      _id: appointmentId,
    });
    if (!appointment)
      throw new common_1.NotFoundException('Appointment not found');
    const diagnosis = await this.diagnosisService.createDiagnosis(
      { ...neurologyReportDto, patient: appointment.patient._id },
      enums_1.Departments.NEUROLOGY,
    );
    neurologyReportDto.appointment = String(appointment._id);
    neurologyReportDto.diagnosis = String(diagnosis._id);
    neurologyReportDto.diagnosisRef = enums_2.DiagnosisRef['BRAIN_METRICS'];
    const response = await this.createConsultationReport(
      neurologyReportDto,
      appointment,
      diagnosis,
    );
    return response;
  }
  async createOptometryReport(optometryReportDto, appointmentId) {
    const appointment = await this.appointmentService.getAppointment({
      _id: appointmentId,
    });
    if (!appointment)
      throw new common_1.NotFoundException('Appointment not found');
    const diagnosis = await this.diagnosisService.createDiagnosis(
      { ...optometryReportDto, patient: appointment.patient._id },
      enums_1.Departments.OPTOMETRY,
    );
    optometryReportDto.appointment = String(appointment._id);
    optometryReportDto.diagnosis = String(diagnosis._id);
    optometryReportDto.diagnosisRef = enums_2.DiagnosisRef['EYES_METRICS'];
    const response = await this.createConsultationReport(
      optometryReportDto,
      appointment,
      diagnosis,
    );
    return response;
  }
  async createCardiologyReport(cardiologyReportDto, appointmentId) {
    const appointment = await this.appointmentService.getAppointment({
      _id: appointmentId,
    });
    if (!appointment)
      throw new common_1.NotFoundException('Appointment not found');
    const diagnosis = await this.diagnosisService.createDiagnosis(
      { ...cardiologyReportDto, patient: appointment.patient._id },
      enums_1.Departments.CARDIOLOGY,
    );
    cardiologyReportDto.appointment = String(appointment._id);
    cardiologyReportDto.diagnosis = String(diagnosis._id);
    cardiologyReportDto.diagnosisRef = enums_2.DiagnosisRef['HEART_METRICS'];
    const response = await this.createConsultationReport(
      cardiologyReportDto,
      appointment,
      diagnosis,
    );
    return response;
  }
  async createNephrologyReport(nephrologyReportDto, appointmentId) {
    const appointment = await this.appointmentService.getAppointment({
      _id: appointmentId,
    });
    if (!appointment)
      throw new common_1.NotFoundException('Appointment not found');
    const diagnosis = await this.diagnosisService.createDiagnosis(
      { ...nephrologyReportDto, patient: appointment.patient._id },
      enums_1.Departments.NEPHROLOGY,
    );
    nephrologyReportDto.appointment = String(appointment._id);
    nephrologyReportDto.diagnosis = String(diagnosis._id);
    nephrologyReportDto.diagnosisRef = enums_2.DiagnosisRef['KIDNEY_METRICS'];
    const response = await this.createConsultationReport(
      nephrologyReportDto,
      appointment,
      diagnosis,
    );
    return response;
  }
  async createHepatologyReport(hepatologyReportDto, appointmentId) {
    const appointment = await this.appointmentService.getAppointment({
      _id: appointmentId,
    });
    if (!appointment)
      throw new common_1.NotFoundException('Appointment not found');
    const diagnosis = await this.diagnosisService.createDiagnosis(
      { ...hepatologyReportDto, patient: appointment.patient._id },
      enums_1.Departments.HEPATOLOGY,
    );
    hepatologyReportDto.appointment = String(appointment._id);
    hepatologyReportDto.diagnosis = String(diagnosis._id);
    hepatologyReportDto.diagnosisRef = enums_2.DiagnosisRef['LIVER_METRICS'];
    const response = await this.createConsultationReport(
      hepatologyReportDto,
      appointment,
      diagnosis,
    );
    return response;
  }
  async createDermatologyReport(dermatologyReportDto, appointmentId) {
    const appointment = await this.appointmentService.getAppointment({
      _id: appointmentId,
    });
    if (!appointment)
      throw new common_1.NotFoundException('Appointment not found');
    const diagnosis = await this.diagnosisService.createDiagnosis(
      { ...dermatologyReportDto, patient: appointment.patient._id },
      enums_1.Departments.DERMATOLOGY,
    );
    dermatologyReportDto.appointment = String(appointment._id);
    dermatologyReportDto.diagnosis = String(diagnosis._id);
    dermatologyReportDto.diagnosisRef = enums_2.DiagnosisRef['SKIN_METRICS'];
    const response = await this.createConsultationReport(
      dermatologyReportDto,
      appointment,
      diagnosis,
    );
    return response;
  }
  async createDentistryReport(dentistryReportDto, appointmentId) {
    const appointment = await this.appointmentService.getAppointment({
      _id: appointmentId,
    });
    if (!appointment)
      throw new common_1.NotFoundException('Appointment not found');
    const diagnosis = await this.diagnosisService.createDiagnosis(
      { ...dentistryReportDto, patient: appointment.patient._id },
      enums_1.Departments.DENTISTRY,
    );
    dentistryReportDto.appointment = String(appointment._id);
    dentistryReportDto.diagnosis = String(diagnosis._id);
    dentistryReportDto.diagnosisRef = enums_2.DiagnosisRef['TEETH_METRICS'];
    const response = await this.createConsultationReport(
      dentistryReportDto,
      appointment,
      diagnosis,
    );
    return response;
  }
  async getPatientReports(department, patientId) {
    const data = await this.diagnosisService.getMultipleDiagnosis(
      { patient: new mongoose_2.Types.ObjectId(patientId) },
      department,
    );
    return {
      success: true,
      message: 'Reports fetched successfully',
      data,
    };
  }
  async getReports(department, userId) {
    const patient = await this.patientService.getPatient({
      user: new mongoose_2.Types.ObjectId(userId),
    });
    if (!patient) throw new common_1.NotFoundException('Patient not found');
    return await this.getPatientReports(department, patient._id);
  }
  async getReport(reportId, department) {
    const data = await this.diagnosisService.getSingleDiagnosis(
      { _id: new mongoose_2.Types.ObjectId(reportId) },
      department,
    );
    if (!data)
      throw new common_1.NotFoundException("Oops! We can't find this report");
    return {
      success: true,
      message: 'Report fetched successfully',
      data,
    };
  }
  async getAppoinmentReport(appointmentId) {
    const consultation = await this.consultationService.getConsultation({
      appointment: appointmentId,
    });
    if (!consultation)
      throw new common_1.NotFoundException(
        "Opps! We can't find the consultation for this report",
      );
    const reportId = consultation?.diagnosis?._id;
    return await this.getReport(reportId, consultation.appointment.department);
  }
};
exports.ConsultationProvider = ConsultationProvider;
exports.ConsultationProvider = ConsultationProvider = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __metadata('design:paramtypes', [
      mongoose_2.Connection,
      consulation_service_1.ConsultationService,
      appointment_service_1.AppointmentService,
      mail_service_1.MailService,
      diagnosis_service_1.DiagnosisService,
      patient_service_1.PatientService,
    ]),
  ],
  ConsultationProvider,
);
//# sourceMappingURL=consultation.provider.js.map
