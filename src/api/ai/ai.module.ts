import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AIController } from './ai.controller';
import {
  AssemblyAiProvider,
  GeminiAIProvider,
  OpenAIProvider,
} from './ai.provider';
import { AIService } from './ai.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [ConfigModule, SharedModule],
  providers: [OpenAIProvider, AssemblyAiProvider, GeminiAIProvider, AIService],
  controllers: [AIController],
})
export class AIModule {}
