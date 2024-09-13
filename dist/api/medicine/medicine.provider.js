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
exports.MedicineProvider = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("../../shared/file/file.service");
const medicine_service_1 = require("./medicine.service");
let MedicineProvider = class MedicineProvider {
    constructor(fileService, medicineService) {
        this.fileService = fileService;
        this.medicineService = medicineService;
    }
    async createMedicine(createMedicineDto) {
        const { url } = await this.fileService.uploadResource(createMedicineDto.image);
        createMedicineDto.image = url;
        const data = await this.medicineService.createMedicine(createMedicineDto);
        return {
            success: true,
            message: 'medicine created successfully',
            data,
        };
    }
    async updateMedicine(updateMedicineDto, medicineId) {
        if (updateMedicineDto.image) {
            const { url } = await this.fileService.uploadResource(updateMedicineDto.image);
            updateMedicineDto.image = url;
        }
        const data = await this.medicineService.updateMedicine({ _id: medicineId }, updateMedicineDto);
        if (!data)
            throw new common_1.NotFoundException('Medicine not found');
        return {
            success: true,
            message: 'medicine updated successfully',
            data,
        };
    }
    async getMedicine(medicineId) {
        const data = await this.medicineService.getMedicine({ _id: medicineId });
        if (!data)
            throw new common_1.NotFoundException('Medicine not found');
        return {
            success: true,
            message: 'medicine fetched successfully',
            data,
        };
    }
    async getMedicines(query) {
        const _query = {};
        const paginationQuery = {};
        if (query.search) {
            _query.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { description: { $regex: query.search, $options: 'i' } },
            ];
            delete query.search;
        }
        if (query.limit) {
            paginationQuery.limit = query.limit;
            delete query.limit;
        }
        if (query.page) {
            paginationQuery.page = query.page;
            delete query.page;
        }
        const { data, page, count, totalPages } = await this.medicineService.getMedicines(_query, paginationQuery);
        return {
            success: true,
            message: 'medicine fetched successfully',
            data,
            meta: {
                page,
                count,
                totalPages,
            },
        };
    }
    async deleteMedicine(medicineId) {
        const data = await this.medicineService.deleteMedicine({ _id: medicineId });
        if (!data)
            throw new common_1.NotFoundException('Medicine not found');
        return {
            success: true,
            message: 'medicine deleted',
        };
    }
};
exports.MedicineProvider = MedicineProvider;
exports.MedicineProvider = MedicineProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_service_1.FileService,
        medicine_service_1.MedicineService])
], MedicineProvider);
//# sourceMappingURL=medicine.provider.js.map