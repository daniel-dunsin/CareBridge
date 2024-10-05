import OpenAI from 'openai';
import { AssemblyAI, Transcript } from 'assemblyai';
import { FileService } from 'src/shared/file/file.service';
import { GenerativeModel } from '@google/generative-ai';
export declare class AIService {
    private readonly openai;
    private readonly assemblyai;
    private readonly geminiai;
    private readonly fileService;
    constructor(openai: OpenAI, assemblyai: AssemblyAI, geminiai: GenerativeModel, fileService: FileService);
    private SUMMARIZER_QUERY;
    private SYMPTOM_CHECKER_QUERY;
    transcribeCall(file: Express.Multer.File): Promise<{
        message: string;
        data: {
            id: string;
        };
        success: boolean;
    }>;
    pollTranscription(id: string): Promise<{
        success: boolean;
        message: string;
        data: Transcript;
    }>;
    formatTranscript(data: Transcript): Promise<string>;
    summarizeVideoCall(transcriptionId: string): Promise<{
        success: boolean;
        message: string;
        data: {
            text: string;
        };
    }>;
    checkSymptom(symptom: string): Promise<{
        success: boolean;
        message: string;
        data: {
            text: string;
        };
    }>;
}
