import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { MULTER_DISK_STORAGE } from './configs/upload-config';
import { AIService } from './ai.service';
import { GenerateSummaryDto } from './dto';
import { IsPublic } from 'src/shared/decorators/auth.decorators';

@Controller('ai')
@ApiTags('ai')
@ApiBearerAuth()
export class AIController {
  constructor(private readonly aiService: AIService) {}

  @Post('transcribe')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file', { storage: MULTER_DISK_STORAGE }))
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'binary',
        },
      },
    },
  })
  @IsPublic()
  async transcribeCall(@UploadedFile() file: Express.Multer.File) {
    return await this.aiService.transcribeCall(file);
  }

  @Post('generate-summary')
  @IsPublic()
  async generateSummary(@Body() generateSummaryDto: GenerateSummaryDto) {
    return await this.aiService.summarizeVideoCall(
      generateSummaryDto.transcriptionId,
    );
  }

  @Post('check-symptoms')
  @IsPublic()
  async checkSymptoms(@Body('symptom') symptom: string) {
    return await this.aiService.checkSymptom(symptom);
  }
}
