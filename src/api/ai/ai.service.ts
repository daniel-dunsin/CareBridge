import { Inject, Injectable } from '@nestjs/common';
import { ASSEMBLY_AI_PROVIDER, OPEN_AI_PROVIDER } from './ai.provider';
import OpenAI from 'openai';
import { AssemblyAI } from 'assemblyai';

@Injectable()
export class AIService {
  constructor(
    @Inject(OPEN_AI_PROVIDER) private readonly openai: OpenAI,
    @Inject(ASSEMBLY_AI_PROVIDER) private readonly assemblyai: AssemblyAI,
  ) {}
}
