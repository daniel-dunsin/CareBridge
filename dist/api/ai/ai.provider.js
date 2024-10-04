"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiAIProvider = exports.AssemblyAiProvider = exports.OpenAIProvider = exports.GEMINI_AI_PROVIDER = exports.ASSEMBLY_AI_PROVIDER = exports.OPEN_AI_PROVIDER = void 0;
const generative_ai_1 = require("@google/generative-ai");
const config_1 = require("@nestjs/config");
const assemblyai_1 = require("assemblyai");
const openai_1 = require("openai");
exports.OPEN_AI_PROVIDER = 'OPEN_AI_PROVIDER';
exports.ASSEMBLY_AI_PROVIDER = 'ASSEMBLY_AI_PROVIDER';
exports.GEMINI_AI_PROVIDER = 'GEMINI_AI_PROVIDER';
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
        const ASSEMBLY_AI_API_KEY = configService.get('ASSEMBLY_AI_API_KEY');
        const assmeblyai = new assemblyai_1.AssemblyAI({ apiKey: ASSEMBLY_AI_API_KEY });
        return assmeblyai;
    },
};
exports.GeminiAIProvider = {
    provide: exports.GEMINI_AI_PROVIDER,
    inject: [config_1.ConfigService],
    useFactory(configService) {
        const GEMINI_AI_API_KEY = configService.get('GEMINI_AI_API_KEY');
        const genai = new generative_ai_1.GoogleGenerativeAI(GEMINI_AI_API_KEY);
        const model = genai.getGenerativeModel({ model: 'gemini-1.5-flash' });
        return model;
    },
};
//# sourceMappingURL=ai.provider.js.map