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
  async transcribeCall(@UploadedFile() file: Express.Multer.File) {
    return await this.aiService.transcribeCall(file);
  }

  @Post('generate-summary')
  async generateSummary(@Body() generateSummaryDto: GenerateSummaryDto) {
    return await this.aiService.summarizeVideoCall(
      generateSummaryDto.transcriptionId,
    );
  }
}
