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
exports.DiagnosisService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bone_schema_1 = require("./schemas/bone.schema");
const mongoose_2 = require("mongoose");
const brain_schema_1 = require("./schemas/brain.schema");
const eyes_schema_1 = require("./schemas/eyes.schema");
const heart_schema_1 = require("./schemas/heart.schema");
const kidney_schema_1 = require("./schemas/kidney.schema");
const liver_schema_1 = require("./schemas/liver.schema");
const skin_schema_1 = require("./schemas/skin.schema");
const teeth_schema_1 = require("./schemas/teeth.schema");
const enums_1 = require("../doctor/enums");
let DiagnosisService = class DiagnosisService {
    constructor(_boneMetricsModel, _brainMetricsModel, _eyesMetricsModel, _heartMetricsModel, _kidneyMetricsModel, _liverMetricsModel, _skinMetricsModel, _teethMetricsModel) {
        this._boneMetricsModel = _boneMetricsModel;
        this._brainMetricsModel = _brainMetricsModel;
        this._eyesMetricsModel = _eyesMetricsModel;
        this._heartMetricsModel = _heartMetricsModel;
        this._kidneyMetricsModel = _kidneyMetricsModel;
        this._liverMetricsModel = _liverMetricsModel;
        this._skinMetricsModel = _skinMetricsModel;
        this._teethMetricsModel = _teethMetricsModel;
    }
    async mapDepartmentToModel(department) {
        const DEPTARTMENT_TO_MODEL = {
            [enums_1.Departments.ORTHOPEDICS]: this._boneMetricsModel,
            [enums_1.Departments.NEUROLOGY]: this._brainMetricsModel,
            [enums_1.Departments.OPTOMETRY]: this._eyesMetricsModel,
            [enums_1.Departments.CARDIOLOGY]: this._heartMetricsModel,
            [enums_1.Departments.NEPHROLOGY]: this._kidneyMetricsModel,
            [enums_1.Departments.HEPATOLOGY]: this._liverMetricsModel,
            [enums_1.Departments.DERMATOLOGY]: this._skinMetricsModel,
            [enums_1.Departments.DENTISTRY]: this._teethMetricsModel,
            [enums_1.Departments.PSYCHOTHERAPY]: undefined,
        };
        const model = DEPTARTMENT_TO_MODEL[department];
        if (!model)
            throw new common_1.InternalServerErrorException('Unable to store records for the selected department');
        return model;
    }
    async populate(model) {
        return await model.populate([
            { path: 'patient', populate: { path: 'user' } },
            {
                path: 'consultation',
                populate: [
                    {
                        path: 'appointment',
                        populate: {
                            path: 'doctor',
                            populate: {
                                path: 'user',
                            },
                        },
                    },
                    {
                        path: 'prescription',
                        populate: {
                            path: 'medicines',
                        },
                    },
                ],
            },
        ]);
    }
    async createDiagnosis(data, department, session) {
        const model = await this.mapDepartmentToModel(department);
        const result = new model(data);
        return await result.save({ session });
    }
    async getSingleDiagnosis(filter, department) {
        const model = await this.mapDepartmentToModel(department);
        return await this.populate(model.findOne(filter));
    }
    async getMultipleDiagnosis(filter, department) {
        const model = await this.mapDepartmentToModel(department);
        return await this.populate(model.find(filter).sort({ createdAt: -1 }));
    }
    async updateDiagnosis(filter, update, department, options) {
        const model = await this.mapDepartmentToModel(department);
        return await model.findOneAndUpdate(filter, update, options);
    }
    async deleteDiagnosis(filter, department, options) {
        const model = await this.mapDepartmentToModel(department);
        return await model.findOneAndDelete(filter, options);
    }
};
exports.DiagnosisService = DiagnosisService;
exports.DiagnosisService = DiagnosisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bone_schema_1.BoneMetrics.name)),
    __param(1, (0, mongoose_1.InjectModel)(brain_schema_1.BrainMetrics.name)),
    __param(2, (0, mongoose_1.InjectModel)(eyes_schema_1.EyesMetrics.name)),
    __param(3, (0, mongoose_1.InjectModel)(heart_schema_1.HeartMetrics.name)),
    __param(4, (0, mongoose_1.InjectModel)(kidney_schema_1.KidneyMetrics.name)),
    __param(5, (0, mongoose_1.InjectModel)(liver_schema_1.LiverMetrics.name)),
    __param(6, (0, mongoose_1.InjectModel)(skin_schema_1.SkinMetrics.name)),
    __param(7, (0, mongoose_1.InjectModel)(teeth_schema_1.TeethMetrics.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], DiagnosisService);
//# sourceMappingURL=diagnosis.service.js.map