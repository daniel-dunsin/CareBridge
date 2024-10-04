import OpenAI from 'openai';
import { AssemblyAI, Transcript } from 'assemblyai';
export declare class AIService {
    private readonly openai;
    private readonly assemblyai;
    constructor(openai: OpenAI, assemblyai: AssemblyAI);
    private SUMMARIZER_QUERY;
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
            summary: string;
        };
    }>;
}
