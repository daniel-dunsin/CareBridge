import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('ai')
@ApiTags('ai')
@ApiBearerAuth()
export class AIController {}
