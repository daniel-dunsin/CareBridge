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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const doctor_schema_1 = require("./schema/doctor.schema");
const mongoose_2 = require("mongoose");
const kyc_verification_schema_1 = require("./schema/kyc-verification.schema");
let DoctorService = class DoctorService {
    constructor(_doctorModel, _kycModel) {
        this._doctorModel = _doctorModel;
        this._kycModel = _kycModel;
    }
    async populate(model) {
        return await model.populate([{ path: 'user' }, { path: 'kycDetails' }]);
    }
    async createDoctor(data) {
        const doctor = await this._doctorModel.create(data);
        return doctor;
    }
    async getDoctor(filter) {
        const doctor = await this.populate(this._doctorModel.findOne(filter));
        return doctor;
    }
    async getDoctors(filter) {
        const { search = '', ...match } = filter;
        const pipelines = [
            {
                $match: match,
            },
            {
                $lookup: {
                    from: 'users',
                    foreignField: '_id',
                    localField: 'user',
                    as: 'user',
                },
            },
            {
                $unwind: {
                    path: '$user',
                    preserveNullAndEmptyArrays: false,
                },
            },
            {
                $sort: { createdAt: -1 },
            },
        ];
        if (search) {
            pipelines.push({
                $match: {
                    $or: [
                        {
                            'user.firstName': { $regex: search, $options: 'i' },
                        },
                        {
                            'user.lastName': { $regex: search, $options: 'i' },
                        },
                    ],
                },
            });
        }
        const doctors = await this._doctorModel.aggregate(pipelines);
        return doctors;
    }
    async updateDoctor(filter, update, options) {
        const doctor = await this.populate(this._doctorModel.findOneAndUpdate(filter, update, {
            new: true,
            runValidators: true,
            ...options,
        }));
        return doctor;
    }
    async deleteDoctor(filter) {
        const doctor = await this._doctorModel.findOneAndDelete(filter);
        return doctor;
    }
    async updateKyc(kycVerificationDto, doctorId) {
        const kyc = await this._kycModel.findOneAndUpdate({ doctor: doctorId }, kycVerificationDto, {
            upsert: true,
            new: true,
            runValidators: true,
        });
        return kyc;
    }
    async getDoctorKyc(doctorId) {
        const kyc = await this._kycModel.findOne({ doctor: doctorId });
        return kyc;
    }
    async getKycs(filter) {
        const kycs = await this._kycModel.find(filter).populate({
            path: 'doctor',
            select: 'user',
            populate: { path: 'user', select: 'firstName lastName profilePicture' },
        });
        return kycs;
    }
};
exports.DoctorService = DoctorService;
exports.DoctorService = DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(doctor_schema_1.Doctor.name)),
    __param(1, (0, mongoose_1.InjectModel)(kyc_verification_schema_1.KycVerification.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], DoctorService);
//# sourceMappingURL=doctor.service.js.map