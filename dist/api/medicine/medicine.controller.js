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
exports.MedicineController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_medicine_dto_1 = require("./dto/create-medicine.dto");
const medicine_provider_1 = require("./medicine.provider");
const get_medicine_dto_1 = require("./dto/get-medicine.dto");
const auth_decorators_1 = require("../../shared/decorators/auth.decorators");
const update_medicine_dto_1 = require("./dto/update-medicine.dto");
const enums_1 = require("../user/enums");
let MedicineController = class MedicineController {
    constructor(medicineProvider) {
        this.medicineProvider = medicineProvider;
    }
    async createMedicine(createMedicineDto) {
        const data = await this.medicineProvider.createMedicine(createMedicineDto);
        return data;
    }
    async getMedicines(query) {
        const data = await this.medicineProvider.getMedicines(query);
        return data;
    }
    async getMedicine(medicineId) {
        const data = await this.medicineProvider.getMedicine(medicineId);
        return data;
    }
    async updateMedicine(medicineId, updateMedicineDto) {
        const data = await this.medicineProvider.updateMedicine(updateMedicineDto, medicineId);
        return data;
    }
    async deleteMedicine(medicineId) {
        const data = await this.medicineProvider.deleteMedicine(medicineId);
        return data;
    }
};
exports.MedicineController = MedicineController;
__decorate([
    (0, common_1.Post)(),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.ADMIN]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicine_dto_1.CreateMedicineDto]),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "createMedicine", null);
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_medicine_dto_1.GetMedicineDto]),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "getMedicines", null);
__decorate([
    (0, common_1.Get)(':medicineId'),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Param)('medicineId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "getMedicine", null);
__decorate([
    (0, common_1.Put)(':medicineId'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.ADMIN]),
    __param(0, (0, common_1.Param)('medicineId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medicine_dto_1.UpdateMedicineDto]),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "updateMedicine", null);
__decorate([
    (0, common_1.Delete)(':medicineId'),
    (0, auth_decorators_1.Roles)([enums_1.RoleNames.ADMIN]),
    __param(0, (0, common_1.Param)('medicineId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "deleteMedicine", null);
exports.MedicineController = MedicineController = __decorate([
    (0, common_1.Controller)('medicine'),
    (0, swagger_1.ApiTags)('medicine'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [medicine_provider_1.MedicineProvider])
], MedicineController);
//# sourceMappingURL=medicine.controller.js.map