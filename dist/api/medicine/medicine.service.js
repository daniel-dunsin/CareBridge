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
exports.MedicineService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const medicine_schema_1 = require("./schemas/medicine.schema");
const mongoose_2 = require("mongoose");
const utils_service_1 = require("../../shared/services/utils.service");
let MedicineService = class MedicineService {
    constructor(_medicineModel, utilService) {
        this._medicineModel = _medicineModel;
        this.utilService = utilService;
    }
    async createMedicine(data) {
        const medicine = await this._medicineModel.create(data);
        return data;
    }
    async getMedicine(filter) {
        return await this._medicineModel.findOne(filter);
    }
    async getMedicines(filter, paginationQuery) {
        const count = await this._medicineModel.find(filter).countDocuments();
        const { skip, page, totalPages, limit } = this.utilService.resolvePaginationQuery({
            ...paginationQuery,
            count,
        });
        const data = await this._medicineModel.find(filter).limit(limit).skip(skip);
        return {
            data,
            page,
            totalPages,
            count,
        };
    }
    async updateMedicine(filter, update) {
        const data = await this._medicineModel.findOneAndUpdate(filter, update);
        return data;
    }
    async deleteMedicine(filter) {
        const data = await this._medicineModel.findOneAndDelete(filter);
        return data;
    }
};
exports.MedicineService = MedicineService;
exports.MedicineService = MedicineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(medicine_schema_1.Medicine.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        utils_service_1.UtilService])
], MedicineService);
//# sourceMappingURL=medicine.service.js.map