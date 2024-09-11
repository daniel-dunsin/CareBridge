import { AppointmentMode } from '../enums';
export declare class SessionDto {
    appointmentDate: Date;
    startTime: Date;
    endTime: Date;
}
export declare class BookSessionDto extends SessionDto {
    mode: AppointmentMode;
}
