import { Days, DoctorSpeciality } from '../enums';
import { BaseUpdateUserDto } from 'src/api/user/dto/update-user.dto';
export declare class SocialLinks {
    facebook?: string;
    whatsapp?: string;
    twitter?: string;
    linkedin?: string;
}
export declare class AvailableDay {
    day: Days;
    startTime: Date;
    endTime: Date;
}
export declare class UpdateDoctorDto extends BaseUpdateUserDto {
    bio: string;
    speciality?: DoctorSpeciality;
    socials: SocialLinks;
    availableDays: AvailableDay[];
    isAvailable: boolean;
    chargePerSession: number;
}
