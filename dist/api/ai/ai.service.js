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
exports.AIService = void 0;
const common_1 = require("@nestjs/common");
const ai_provider_1 = require("./ai.provider");
const openai_1 = require("openai");
const assemblyai_1 = require("assemblyai");
let AIService = class AIService {
    constructor(openai, assemblyai) {
        this.openai = openai;
        this.assemblyai = assemblyai;
    }
};
exports.AIService = AIService;
exports.AIService = AIService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(ai_provider_1.OPEN_AI_PROVIDER)),
    __param(1, (0, common_1.Inject)(ai_provider_1.ASSEMBLY_AI_PROVIDER)),
    __metadata("design:paramtypes", [openai_1.default,
        assemblyai_1.AssemblyAI])
], AIService);
//# sourceMappingURL=ai.service.js.map