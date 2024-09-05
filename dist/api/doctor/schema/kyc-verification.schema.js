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
exports.KycVerificationSchema = exports.KycVerification = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const db_const_1 = require("../../../shared/constants/db.const");
const doctor_schema_1 = require("./doctor.schema");
const enums_1 = require("../enums");
let KycVerification = class KycVerification {
};
exports.KycVerification = KycVerification;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: doctor_schema_1.Doctor.name, required: true }),
    __metadata("design:type", Object)
], KycVerification.prototype, "doctor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], KycVerification.prototype, "idDoc", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: Object.values(enums_1.KycIdType) }),
    __metadata("design:type", String)
], KycVerification.prototype, "idType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], KycVerification.prototype, "professionalCert", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], KycVerification.prototype, "idDocPublicId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], KycVerification.prototype, "professionalCertPublicId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(enums_1.KycStatus),
        default: enums_1.KycStatus.PENDING,
    }),
    __metadata("design:type", String)
], KycVerification.prototype, "status", void 0);
exports.KycVerification = KycVerification = __decorate([
    (0, mongoose_1.Schema)(db_const_1.schemaOptions)
], KycVerification);
exports.KycVerificationSchema = mongoose_1.SchemaFactory.createForClass(KycVerification);
//# sourceMappingURL=kyc-verification.schema.js.map