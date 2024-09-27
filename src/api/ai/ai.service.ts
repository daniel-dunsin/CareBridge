import { Inject, Injectable } from '@nestjs/common';
import { AssemblyAiProvider, OpenAIProvider } from './ai.provider';
import OpenAI from 'openai';
import { AssemblyAI } from 'assemblyai';

@Injectable()
export class AIService {
  constructor(
    @Inject(OpenAIProvider) private readonly openai: OpenAI,
    @Inject(AssemblyAiProvider) private readonly assemblyai: AssemblyAI,
  ) {}
}
