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
exports.DoctorSchema = exports.Doctor = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../user/schema/user.schema");
const db_const_1 = require("../../../shared/constants/db.const");
const enums_1 = require("../enums");
let Doctor = class Doctor {
};
exports.Doctor = Doctor;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: user_schema_1.User.name,
    }),
    __metadata("design:type", Object)
], Doctor.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Doctor.prototype, "yearsOfExperience", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(enums_1.DoctorSpeciality),
    }),
    __metadata("design:type", String)
], Doctor.prototype, "speciality", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(enums_1.Departments),
    }),
    __metadata("design:type", String)
], Doctor.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Doctor.prototype, "qualifications", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "bio", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            facebook: {
                type: String,
            },
            twitter: {
                type: String,
            },
            whatsapp: {
                type: String,
            },
            linkedin: {
                type: String,
            },
        },
        required: false,
    }),
    __metadata("design:type", Object)
], Doctor.prototype, "socials", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Doctor.prototype, "kycVerified", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Doctor.prototype, "isAvailable", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                day: {
                    type: String,
                    enum: Object.values(enums_1.Days),
                },
                startTime: {
                    type: Date,
                },
                endTime: {
                    type: Date,
                },
            },
        ],
        default: [],
    }),
    __metadata("design:type", Array)
], Doctor.prototype, "availableDays", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Doctor.prototype, "chargePerSession", void 0);
exports.Doctor = Doctor = __decorate([
    (0, mongoose_1.Schema)(db_const_1.schemaOptions)
], Doctor);
exports.DoctorSchema = mongoose_1.SchemaFactory.createForClass(Doctor);
//# sourceMappingURL=doctor.schema.js.map