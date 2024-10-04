"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIService = void 0;
const common_1 = require("@nestjs/common");
const ai_provider_1 = require("./ai.provider");
const openai_1 = require("openai");
const assemblyai_1 = require("assemblyai");
let AIService = class AIService {
    constructor(openai, assemblyai) {
        this.openai = openai;
        this.assemblyai = assemblyai;
    }
    SUMMARIZER_QUERY(transcript) {
        return `Summarize the following doctor-patient appointment video call transcript. The summary should include the key points discussed, the patient's symptoms, the doctor's diagnosis or advice, any medications prescribed, follow-up recommendations, and other important details. Format the summary clearly under headings such as 'Patient Details,' 'Symptoms,' 'Diagnosis,' 'Medications/Prescriptions,' and 'Follow-up Actions.' Ensure the summary is concise but covers all critical information. Here is the transcript:\n\n${transcript}`;
    }
    async transcribeCall(file) {
        const transacript = await this.assemblyai.transcripts.transcribe({
            audio: file.path,
            speaker_labels: true,
            format_text: true,
        });
        return {
            message: 'Transcription queued',
            data: {
                id: transacript.id,
            },
            success: true,
        };
    }
    async pollTranscription(id) {
        let status = 'queued';
        let data = undefined;
        while (status !== 'completed' && status !== 'error') {
            const transcript = await this.assemblyai.transcripts.get(id);
            status = transcript.status;
            data = transcript;
            if (status !== 'completed') {
                await new Promise((resolve) => setTimeout(resolve, 2000));
            }
        }
        if (status === 'completed') {
            return {
                success: true,
                message: 'Transcript processed',
                data,
            };
        }
        else {
            throw new common_1.InternalServerErrorException('Unable to process transcript');
        }
    }
    async formatTranscript(data) {
        let transcript = '';
        let currentSpeaker = null;
        data.words.forEach((word) => {
            if (word.speaker !== currentSpeaker) {
                if (currentSpeaker !== null) {
                    transcript += '\n\n';
                }
                transcript += `${word.speaker}: `;
                currentSpeaker = word.speaker;
            }
            transcript += `${word.text} `;
        });
        return transcript;
    }
    async summarizeVideoCall(transcriptionId) {
        const { data: transcript } = await this.pollTranscription(transcriptionId);
        const speakerFormattedTranscript = await this.formatTranscript(transcript);
        const { choices } = await this.openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: 'You are an assistant that summarizes doctor-patient video call transcripts.',
                },
                {
                    role: 'user',
                    content: `${this.SUMMARIZER_QUERY(speakerFormattedTranscript)}`,
                },
            ],
            max_tokens: 150,
            temperature: 0.8,
        });
        if (choices.length == 0) {
            throw new common_1.BadRequestException('Unable to generate summary');
        }
        const data = {
            summary: choices[0].message.content,
        };
        return {
            success: true,
            message: 'Summary generated',
            data,
        };
    }
};
exports.AIService = AIService;
exports.AIService = AIService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(ai_provider_1.OPEN_AI_PROVIDER)),
    __param(1, (0, common_1.Inject)(ai_provider_1.ASSEMBLY_AI_PROVIDER)),
    __metadata("design:paramtypes", [openai_1.default,
        assemblyai_1.AssemblyAI])
], AIService);
//# sourceMappingURL=ai.service.js.map