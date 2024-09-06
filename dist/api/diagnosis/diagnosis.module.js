"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisModule = void 0;
const common_1 = require("@nestjs/common");
const diagnosis_provider_1 = require("./diagnosis.provider");
const diagnosis_service_1 = require("./diagnosis.service");
const diagnosis_controller_1 = require("./diagnosis.controller");
const mongoose_1 = require("@nestjs/mongoose");
const bone_schema_1 = require("./schemas/bone.schema");
const brain_schema_1 = require("./schemas/brain.schema");
const eyes_schema_1 = require("./schemas/eyes.schema");
const heart_schema_1 = require("./schemas/heart.schema");
const kidney_schema_1 = require("./schemas/kidney.schema");
const liver_schema_1 = require("./schemas/liver.schema");
const skin_schema_1 = require("./schemas/skin.schema");
const teeth_schema_1 = require("./schemas/teeth.schema");
let DiagnosisModule = class DiagnosisModule {
};
exports.DiagnosisModule = DiagnosisModule;
exports.DiagnosisModule = DiagnosisModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: bone_schema_1.BoneMetrics.name,
                    useFactory() {
                        const schema = bone_schema_1.BoneMetricsSchema;
                        return schema;
                    },
                },
                {
                    name: brain_schema_1.BrainMetrics.name,
                    useFactory() {
                        const schema = brain_schema_1.BrainMetricsSchema;
                        return schema;
                    },
                },
                {
                    name: eyes_schema_1.EyesMetrics.name,
                    useFactory() {
                        const schema = eyes_schema_1.EyesMetricsSchema;
                        return schema;
                    },
                },
                {
                    name: heart_schema_1.HeartMetrics.name,
                    useFactory() {
                        const schema = heart_schema_1.HeartMetricsSchema;
                        return schema;
                    },
                },
                {
                    name: kidney_schema_1.KidneyMetrics.name,
                    useFactory() {
                        const schema = kidney_schema_1.KidneyMetricsSchema;
                        return schema;
                    },
                },
                {
                    name: liver_schema_1.LiverMetrics.name,
                    useFactory() {
                        const schema = liver_schema_1.LiverMetricsSchema;
                        return schema;
                    },
                },
                {
                    name: skin_schema_1.SkinMetrics.name,
                    useFactory() {
                        const schema = skin_schema_1.SkinMetricsSchema;
                        return schema;
                    },
                },
                {
                    name: teeth_schema_1.TeethMetrics.name,
                    useFactory() {
                        const schema = teeth_schema_1.TeethMetricsSchema;
                        return schema;
                    },
                },
            ]),
        ],
        providers: [diagnosis_provider_1.DiagnosisProvider, diagnosis_service_1.DiagnosisService],
        controllers: [diagnosis_controller_1.DiagnosisController],
        exports: [diagnosis_service_1.DiagnosisService],
    })
], DiagnosisModule);
//# sourceMappingURL=diagnosis.module.js.map