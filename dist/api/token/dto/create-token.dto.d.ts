import { TokenTypes } from '../enums';
export declare class CreateTokenDto {
    email: string;
    value: string;
    type: TokenTypes;
}
declare const GetTokenDto_base: import("@nestjs/common").Type<Partial<CreateTokenDto>>;
export declare class GetTokenDto extends GetTokenDto_base {
}
export {};
