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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const config_1 = require("@nestjs/config");
let ZoomService = class ZoomService {
    constructor(configService) {
        this.configService = configService;
        this.baseUrl = 'https://api.zoom.us/v2/users/me';
    }
    async getZoomAccessToken() {
        const tokenUrl = 'https://zoom.us/oauth/token';
        const clientId = this.configService.get('ZOOM_CLIENT_ID');
        const clientSecret = this.configService.get('ZOOM_CLIENT_SECRET');
        const accountId = this.configService.get('ZOOM_ACCOUNT_ID');
        const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
        try {
            const response = await axios_1.default.post(tokenUrl + `?grant_type=account_credentials&account_id=${accountId}`, {}, {
                headers: {
                    Authorization: `Basic ${auth}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            return response.data.access_token;
        }
        catch (error) {
            console.error('Error fetching Zoom access token:', error);
            throw new Error('Error fetching Zoom access token');
        }
    }
    async createZoomEvent(body) {
        const accessToken = await this.getZoomAccessToken();
        const { attendees, topic, description, schedule } = body;
        const meetingData = {
            topic: topic,
            start_time: schedule.toISOString(),
            duration: 60,
            timezone: 'Africa/Lagos',
            agenda: description,
            settings: {
                host_video: true,
                participant_video: true,
                join_before_host: true,
                mute_upon_entry: true,
                use_pmi: false,
                approval_type: 0,
                meeting_invitees: attendees.map((email) => ({ email })),
                waiting_room: false,
            },
        };
        const response = await axios_1.default.post(`${this.baseUrl}/meetings`, meetingData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });
        return response?.data;
    }
    async deleteZoomEvent(meetingId) {
        const accessToken = await this.getZoomAccessToken();
        try {
            const response = await axios_1.default.delete(`${this.baseUrl}/meetings/${meetingId}?cancel_meeting_reminder=true&schedule_for_reminder=true`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
            return response?.data;
        }
        catch (error) {
            console.error('Unable to create zoom event', event);
            throw error;
        }
    }
};
exports.ZoomService = ZoomService;
exports.ZoomService = ZoomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ZoomService);
//# sourceMappingURL=zoom.service.js.map