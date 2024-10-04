import { GoogleGenerativeAI } from '@google/generative-ai';
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AssemblyAI } from 'assemblyai';
import OpenAI from 'openai';

export const OPEN_AI_PROVIDER = 'OPEN_AI_PROVIDER';
export const ASSEMBLY_AI_PROVIDER = 'ASSEMBLY_AI_PROVIDER';
export const GEMINI_AI_PROVIDER = 'GEMINI_AI_PROVIDER';

export const OpenAIProvider: Provider = {
  provide: OPEN_AI_PROVIDER,
  inject: [ConfigService],
  useFactory(configService: ConfigService) {
    const OPEN_AI_API_KEY = configService.get<string>('OPEN_AI_API_KEY');
    const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });

    return openai;
  },
};

export const AssemblyAiProvider: Provider = {
  provide: ASSEMBLY_AI_PROVIDER,
  inject: [ConfigService],
  useFactory(configService: ConfigService) {
    const ASSEMBLY_AI_API_KEY = configService.get<string>(
      'ASSEMBLY_AI_API_KEY',
    );
    const assmeblyai = new AssemblyAI({ apiKey: ASSEMBLY_AI_API_KEY });

    return assmeblyai;
  },
};

export const GeminiAIProvider: Provider = {
  provide: GEMINI_AI_PROVIDER,
  inject: [ConfigService],
  useFactory(configService: ConfigService) {
    const GEMINI_AI_API_KEY = configService.get<string>('GEMINI_AI_API_KEY');
    const genai = new GoogleGenerativeAI(GEMINI_AI_API_KEY);

    const model = genai.getGenerativeModel({ model: 'gemini-1.5-flash' });

    return model;
  },
};
