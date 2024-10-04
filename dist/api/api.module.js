"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("./database/database.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const token_module_1 = require("./token/token.module");
const doctor_module_1 = require("./doctor/doctor.module");
const patient_module_1 = require("./patient/patient.module");
const diagnosis_module_1 = require("./diagnosis/diagnosis.module");
const appointment_module_1 = require("./appointment/appointment.module");
const video_module_1 = require("./video/video.module");
const medicine_module_1 = require("./medicine/medicine.module");
const order_module_1 = require("./order/order.module");
const payment_module_1 = require("./payment/payment.module");
const ai_module_1 = require("./ai/ai.module");
let ApiModule = class ApiModule {
};
exports.ApiModule = ApiModule;
exports.ApiModule = ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            token_module_1.TokenModule,
            doctor_module_1.DoctorModule,
            patient_module_1.PatientModule,
            diagnosis_module_1.DiagnosisModule,
            appointment_module_1.AppointmentModule,
            video_module_1.VideoModule,
            medicine_module_1.MedicineModule,
            order_module_1.OrderModule,
            payment_module_1.PaymentModule,
            ai_module_1.AIModule,
        ],
    })
], ApiModule);
//# sourceMappingURL=api.module.js.map