import OpenAI from 'openai';
import { AssemblyAI } from 'assemblyai';
export declare class AIService {
    private readonly openai;
    private readonly assemblyai;
    constructor(openai: OpenAI, assemblyai: AssemblyAI);
}
