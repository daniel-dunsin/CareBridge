import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  ASSEMBLY_AI_PROVIDER,
  GEMINI_AI_PROVIDER,
  OPEN_AI_PROVIDER,
} from './ai.provider';
import OpenAI from 'openai';
import { AssemblyAI, Transcript } from 'assemblyai';
import { FileService } from 'src/shared/file/file.service';
import { GenerativeModel } from '@google/generative-ai';

@Injectable()
export class AIService {
  constructor(
    @Inject(OPEN_AI_PROVIDER) private readonly openai: OpenAI,
    @Inject(ASSEMBLY_AI_PROVIDER) private readonly assemblyai: AssemblyAI,
    @Inject(GEMINI_AI_PROVIDER) private readonly geminiai: GenerativeModel,
    private readonly fileService: FileService,
  ) {}

  private SUMMARIZER_QUERY(transcript: string) {
    return `Summarize the following doctor-patient appointment video call transcript. The summary should include the key points discussed, like, the patient's symptoms, the doctor's diagnosis or advice, any medications prescribed, follow-up recommendations, and other important details. Format the summary clearly under headings such as 'Symptoms,' 'Diagnosis,' 'Medications/Prescriptions,' and 'Follow-up Actions.' Ensure the summary is concise but covers all critical information. Here is the transcript:\n\n${transcript}`;
  }

  async transcribeCall(file: Express.Multer.File) {
    const { url } = await this.fileService.uploadResource(file.path, {
      resource_type: 'video',
    });

    const transacript = await this.assemblyai.transcripts.transcribe({
      audio: url,
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

  async pollTranscription(id: string) {
    let status: Transcript['status'] = 'queued';
    let data: Transcript | undefined = undefined;

    while (status !== 'completed' && status !== 'error') {
      const transcript = await this.assemblyai.transcripts.get(id);

      status = transcript.status;
      data = transcript;

      if (status !== 'completed') {
        // wait 2s before polling again
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }

    if (status === 'completed') {
      return {
        success: true,
        message: 'Transcript processed',
        data,
      };
    } else {
      throw new InternalServerErrorException('Unable to process transcript');
    }
  }

  async formatTranscript(data: Transcript) {
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

  async summarizeVideoCall(transcriptionId: string) {
    const { data: transcript } = await this.pollTranscription(transcriptionId);

    const speakerFormattedTranscript = await this.formatTranscript(transcript);

    const { response } = await this.geminiai.generateContent(
      this.SUMMARIZER_QUERY(speakerFormattedTranscript),
    );

    const data = {
      summary: response.text(),
    };

    return {
      success: true,
      message: 'Summary generated',
      data,
    };
  }
}
