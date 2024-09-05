"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModule = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const doctor_provider_1 = require("./doctor.provider");
const doctor_controller_1 = require("./doctor.controller");
const mongoose_1 = require("@nestjs/mongoose");
const doctor_schema_1 = require("./schema/doctor.schema");
const user_module_1 = require("../user/user.module");
const kyc_verification_schema_1 = require("./schema/kyc-verification.schema");
const shared_module_1 = require("../../shared/shared.module");
const enums_1 = require("./enums");
let DoctorModule = class DoctorModule {
};
exports.DoctorModule = DoctorModule;
exports.DoctorModule = DoctorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: doctor_schema_1.Doctor.name,
                    useFactory() {
                        const schema = doctor_schema_1.DoctorSchema;
                        schema.pre('save', function () {
                            if (this.isModified('speciality')) {
                                this.department = enums_1.SPECIALITY_TO_DEPARTMENT[this.speciality];
                            }
                            return;
                        });
                        schema.virtual('kycDetails', {
                            justOne: true,
                            foreignField: 'doctor',
                            localField: '_id',
                            ref: kyc_verification_schema_1.KycVerification.name,
                        });
                        return schema;
                    },
                },
                {
                    name: kyc_verification_schema_1.KycVerification.name,
                    useFactory() {
                        const schema = kyc_verification_schema_1.KycVerificationSchema;
                        return schema;
                    },
                },
            ]),
            user_module_1.UserModule,
            shared_module_1.SharedModule,
        ],
        providers: [doctor_service_1.DoctorService, doctor_provider_1.DoctorProvider],
        controllers: [doctor_controller_1.DoctorController],
        exports: [doctor_service_1.DoctorService],
    })
], DoctorModule);
//# sourceMappingURL=doctor.module.js.map