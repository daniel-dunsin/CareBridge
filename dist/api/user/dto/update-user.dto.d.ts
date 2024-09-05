import { Gender } from 'src/api/user/enums';
export declare class Address {
    state: string;
    city: string;
    country: string;
}
export declare class BaseUpdateUserDto {
    firstName?: string;
    lastName?: string;
    country?: string;
    gender?: Gender;
    address: Address;
}
