"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const patient_schema_1 = require("./schema/patient.schema");
const mongoose_2 = require("mongoose");
let PatientService = class PatientService {
    constructor(_patientModel) {
        this._patientModel = _patientModel;
    }
    async populate(model) {
        return await model.populate([
            { path: 'user' },
            { path: 'favouriteDoctors', populate: [{ path: 'user' }] },
        ]);
    }
    async createPatient(data) {
        const patient = await this._patientModel.create(data);
        return patient;
    }
    async getPatient(filter) {
        const patient = await this.populate(this._patientModel.findOne(filter));
        return patient;
    }
    async getPatients(filter) {
        const patients = await this.populate(this._patientModel.find(filter));
        return patients;
    }
    async updatePatient(filter, update, options) {
        const patient = await this.populate(this._patientModel.findOneAndUpdate(filter, update, {
            new: true,
            runValidators: true,
            ...options,
        }));
        return patient;
    }
    async deletePatient(filter) {
        const patient = await this._patientModel.findOneAndDelete(filter);
        return patient;
    }
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(patient_schema_1.Patient.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PatientService);
//# sourceMappingURL=patient.service.js.map