import { IsString } from 'src/shared/decorators';

export class GenerateSummaryDto {
  @IsString(false)
  transcriptionId: string;
}
