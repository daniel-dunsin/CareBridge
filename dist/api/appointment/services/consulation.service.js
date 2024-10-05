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
exports.ConsultationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const consultation_schema_1 = require("../schemas/consultation.schema");
const mongoose_2 = require("mongoose");
let ConsultationService = class ConsultationService {
    constructor(_consultationModel) {
        this._consultationModel = _consultationModel;
        this.getConsultations({});
    }
    async populate(model) {
        return await model.populate([
            { path: 'diagnosis' },
            { path: 'appointment' },
            { path: 'prescription', populate: { path: 'medicines' } },
        ]);
    }
    async createConsultation(createConsultaionDto, session) {
        let consultation = new this._consultationModel(createConsultaionDto);
        consultation = await consultation.save({ session });
        return await consultation.populate([
            { path: 'diagnosis' },
            { path: 'appointment' },
            { path: 'prescription.medicines' },
        ]);
    }
    async getConsultation(filter) {
        const consulation = await this.populate(this._consultationModel.findOne(filter));
        return consulation;
    }
    async getConsultations(filter) {
        const consulation = await this.populate(this._consultationModel.find(filter).sort({ createdAt: -1 }));
        return consulation;
    }
    async updateConsultation(filter, update, options) {
        const consulation = await this.populate(this._consultationModel.findOneAndUpdate(filter, update, options));
        return consulation;
    }
    async deleteConsultation(filter, options) {
        const consulation = await this._consultationModel.findOneAndDelete(filter, options);
        return consulation;
    }
};
exports.ConsultationService = ConsultationService;
exports.ConsultationService = ConsultationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(consultation_schema_1.Consultation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ConsultationService);
//# sourceMappingURL=consulation.service.js.map