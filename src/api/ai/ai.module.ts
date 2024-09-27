import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AIController } from './ai.controller';
import { OpenAIProvider } from './ai.provider';
import { AIService } from './ai.service';

@Module({
  imports: [ConfigModule],
  providers: [OpenAIProvider, AIService],
  controllers: [AIController],
})
export class AIModule {}
