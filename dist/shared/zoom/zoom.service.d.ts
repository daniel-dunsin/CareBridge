import { CreateZoomEvent } from './interfaces/request';
import { ZoomCallResponse } from './interfaces/response';
import { ConfigService } from '@nestjs/config';
export declare class ZoomService {
    private readonly configService;
    private baseUrl;
    constructor(configService: ConfigService);
    private getZoomAccessToken;
    createZoomEvent(body: CreateZoomEvent): Promise<ZoomCallResponse>;
    deleteZoomEvent(meetingId: string): Promise<any>;
}
