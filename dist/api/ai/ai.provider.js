"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssemblyAiProvider = exports.OpenAIProvider = exports.ASSEMBLY_AI_PROVIDER = exports.OPEN_AI_PROVIDER = void 0;
const config_1 = require("@nestjs/config");
const assemblyai_1 = require("assemblyai");
const openai_1 = require("openai");
exports.OPEN_AI_PROVIDER = 'OPEN_AI_PROVIDER';
exports.ASSEMBLY_AI_PROVIDER = 'ASSEMBLY_AI_PROVIDER';
exports.OpenAIProvider = {
    provide: exports.OPEN_AI_PROVIDER,
    inject: [config_1.ConfigService],
    useFactory(configService) {
        const OPEN_AI_API_KEY = configService.get('OPEN_AI_API_KEY');
        const openai = new openai_1.default({ apiKey: OPEN_AI_API_KEY });
        return openai;
    },
};
exports.AssemblyAiProvider = {
    provide: exports.ASSEMBLY_AI_PROVIDER,
    inject: [config_1.ConfigService],
    useFactory(configService) {
        const ASSMEBLY_AI_API_KEY = configService.get('ASSMEBLY_AI_API_KEY');
        const assmeblyai = new assemblyai_1.AssemblyAI({ apiKey: ASSMEBLY_AI_API_KEY });
        return assmeblyai;
    },
};
//# sourceMappingURL=ai.provider.js.map