import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AssemblyAI } from 'assemblyai';
import OpenAI from 'openai';

export const OPEN_AI_PROVIDER = 'OPEN_AI_PROVIDER';
export const ASSEMBLY_AI_PROVIDER = 'ASSEMBLY_AI_PROVIDER';

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
    const ASSMEBLY_AI_API_KEY = configService.get<string>(
      'ASSMEBLY_AI_API_KEY',
    );
    const assmeblyai = new AssemblyAI({ apiKey: ASSMEBLY_AI_API_KEY });

    return assmeblyai;
  },
};
