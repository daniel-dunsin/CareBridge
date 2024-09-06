"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisRef = exports.AppointmentMode = exports.AppointmentStatus = void 0;
const bone_schema_1 = require("../../diagnosis/schemas/bone.schema");
const brain_schema_1 = require("../../diagnosis/schemas/brain.schema");
const eyes_schema_1 = require("../../diagnosis/schemas/eyes.schema");
const heart_schema_1 = require("../../diagnosis/schemas/heart.schema");
const kidney_schema_1 = require("../../diagnosis/schemas/kidney.schema");
const liver_schema_1 = require("../../diagnosis/schemas/liver.schema");
const skin_schema_1 = require("../../diagnosis/schemas/skin.schema");
const teeth_schema_1 = require("../../diagnosis/schemas/teeth.schema");
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PENDING"] = "pending";
    AppointmentStatus["SUCCESSFUL"] = "successful";
    AppointmentStatus["FAILED"] = "failed";
    AppointmentStatus["CANCELLED"] = "cancelled";
})(AppointmentStatus || (exports.AppointmentStatus = AppointmentStatus = {}));
var AppointmentMode;
(function (AppointmentMode) {
    AppointmentMode["ONLINE"] = "online";
    AppointmentMode["PHYSICAL"] = "physical";
})(AppointmentMode || (exports.AppointmentMode = AppointmentMode = {}));
exports.DiagnosisRef = {
    BONE_METRICS: bone_schema_1.BoneMetrics.name,
    BRAIN_METRICS: brain_schema_1.BrainMetrics.name,
    EYES_METRICS: eyes_schema_1.EyesMetrics.name,
    HEART_METRICS: heart_schema_1.HeartMetrics.name,
    KIDNEY_METRICS: kidney_schema_1.KidneyMetrics.name,
    LIVER_METRICS: liver_schema_1.LiverMetrics.name,
    SKIN_METRICS: skin_schema_1.SkinMetrics.name,
    TEETH_METRICS: teeth_schema_1.TeethMetrics.name,
};
//# sourceMappingURL=index.js.map