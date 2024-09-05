import { MailerService } from '@nestjs-modules/mailer';
import { SendMail } from './interfaces';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(dto: SendMail): Promise<void>;
}
