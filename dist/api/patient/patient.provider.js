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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProvider = void 0;
const common_1 = require("@nestjs/common");
const patient_service_1 = require("./patient.service");
const user_service_1 = require("../user/user.service");
const mongoose_1 = require("mongoose");
let PatientProvider = class PatientProvider {
    constructor(patientService, userService) {
        this.patientService = patientService;
        this.userService = userService;
    }
    async getUserPatient(userId) {
        const data = await this.patientService.getPatient({
            user: new mongoose_1.Types.ObjectId(userId),
        });
        if (!data) {
            throw new common_1.NotFoundException('Patient not found');
        }
        return {
            success: true,
            message: 'Patient profile fetched',
            data,
        };
    }
    async getPatient(patientId) {
        const data = await this.patientService.getPatient({ _id: patientId });
        if (!data) {
            throw new common_1.NotFoundException('Patient not found');
        }
        return {
            success: true,
            message: 'Patient profile fetched',
            data,
        };
    }
    async updatePatient(updatePatientDto, userId) {
        const data = await this.patientService.updatePatient({ user: new mongoose_1.Types.ObjectId(userId) }, updatePatientDto);
        await this.userService.updateUser({ _id: userId }, updatePatientDto);
        if (!data) {
            throw new common_1.NotFoundException('Patient not found');
        }
        return {
            success: true,
            message: 'Patient porifle updated',
            data,
        };
    }
    async addFavDoc(doctorId, userId) {
        const data = await this.patientService.getPatient({
            user: new mongoose_1.Types.ObjectId(userId),
        });
        if (!data)
            throw new common_1.NotFoundException('Patient not found');
        if (!data.favouriteDoctors.find((doc) => String(doc._id) === String(doctorId))) {
            data.favouriteDoctors.push(doctorId);
            await data.save();
        }
        return {
            success: true,
            message: 'doctor added to favourites',
        };
    }
    async removeFavDoc(doctorId, userId) {
        const data = await this.patientService.getPatient({
            user: new mongoose_1.Types.ObjectId(userId),
        });
        if (!data)
            throw new common_1.NotFoundException('Patient not found');
        data.favouriteDoctors = data.favouriteDoctors.filter((doc) => String(doc._id) === String(doctorId));
        await data.save();
        return {
            success: true,
            message: 'doctor removed from favourites',
        };
    }
    async getFavDoctors(patientId) {
        const data = await this.patientService.getPatient({ _id: patientId });
        if (!data)
            throw new common_1.NotFoundException('Patient not found');
        return {
            success: true,
            message: 'favourite doctors fetched successfully',
            data: data.favouriteDoctors,
        };
    }
    async getUserFavDoctors(userId) {
        const data = await this.patientService.getPatient({
            user: new mongoose_1.Types.ObjectId(userId),
        });
        if (!data)
            throw new common_1.NotFoundException('Patient not found');
        return {
            success: true,
            message: 'favourite doctors fetched successfully',
            data: data.favouriteDoctors,
        };
    }
};
exports.PatientProvider = PatientProvider;
exports.PatientProvider = PatientProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patient_service_1.PatientService,
        user_service_1.UserService])
], PatientProvider);
//# sourceMappingURL=patient.provider.js.map