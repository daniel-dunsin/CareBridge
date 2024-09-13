"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineModule = void 0;
const common_1 = require("@nestjs/common");
const medicine_controller_1 = require("./medicine.controller");
const medicine_provider_1 = require("./medicine.provider");
const mongoose_1 = require("@nestjs/mongoose");
const medicine_service_1 = require("./medicine.service");
const medicine_schema_1 = require("./schemas/medicine.schema");
const shared_module_1 = require("../../shared/shared.module");
let MedicineModule = class MedicineModule {
};
exports.MedicineModule = MedicineModule;
exports.MedicineModule = MedicineModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shared_module_1.SharedModule,
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: medicine_schema_1.Medicine.name,
                    useFactory() {
                        const schema = medicine_schema_1.MedicineSchema;
                        return schema;
                    },
                },
            ]),
        ],
        controllers: [medicine_controller_1.MedicineController],
        providers: [medicine_provider_1.MedicineProvider, medicine_service_1.MedicineService],
        exports: [medicine_service_1.MedicineService],
    })
], MedicineModule);
//# sourceMappingURL=medicine.module.js.map