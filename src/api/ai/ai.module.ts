import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AIController } from './ai.controller';
import { AssemblyAiProvider, OpenAIProvider } from './ai.provider';
import { AIService } from './ai.service';

@Module({
  imports: [ConfigModule],
  providers: [OpenAIProvider, AssemblyAiProvider, AIService],
  controllers: [AIController],
})
export class AIModule {}
