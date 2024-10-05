import { AIService } from './ai.service';
import { GenerateSummaryDto } from './dto';
export declare class AIController {
    private readonly aiService;
    constructor(aiService: AIService);
    transcribeCall(file: Express.Multer.File): Promise<{
        message: string;
        data: {
            id: string;
        };
        success: boolean;
    }>;
    generateSummary(generateSummaryDto: GenerateSummaryDto): Promise<{
        success: boolean;
        message: string;
        data: {
            text: string;
        };
    }>;
    checkSymptoms(symptom: string): Promise<{
        success: boolean;
        message: string;
        data: {
            text: string;
        };
    }>;
}
