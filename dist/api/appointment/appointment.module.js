"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const appointment_schema_1 = require("./schemas/appointment.schema");
const consultation_schema_1 = require("./schemas/consultation.schema");
const enums_1 = require("./enums");
let AppointmentModule = class AppointmentModule {
};
exports.AppointmentModule = AppointmentModule;
exports.AppointmentModule = AppointmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: appointment_schema_1.Appointment.name,
                    useFactory() {
                        const schema = appointment_schema_1.AppointmentSchema;
                        schema.pre('save', function () {
                            if (this.isModified('patientStatus') ||
                                this.isModified('doctorStatus')) {
                                if (this.patientStatus === enums_1.AppointmentStatus.SUCCESSFUL &&
                                    this.doctorStatus === enums_1.AppointmentStatus.SUCCESSFUL) {
                                    this.status === enums_1.AppointmentStatus.SUCCESSFUL;
                                }
                                else if (this.patientStatus === enums_1.AppointmentStatus.FAILED &&
                                    this.doctorStatus === enums_1.AppointmentStatus.FAILED) {
                                    this.status === enums_1.AppointmentStatus.FAILED;
                                }
                            }
                            return;
                        });
                        return schema;
                    },
                },
                {
                    name: consultation_schema_1.Consultation.name,
                    useFactory() {
                        const schema = consultation_schema_1.ConsultationSchema;
                        return schema;
                    },
                },
            ]),
        ],
        providers: [],
        exports: [],
    })
], AppointmentModule);
//# sourceMappingURL=appointment.module.js.map