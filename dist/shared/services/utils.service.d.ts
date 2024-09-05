import { ConfigService } from '@nestjs/config';
import { UserDocument } from 'src/api/user/schema/user.schema';
import { ResolvePaginationQuery } from '../interfaces/pagination.interface';
export declare class UtilService {
    private readonly configService;
    constructor(configService: ConfigService);
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hash: string): Promise<boolean>;
    generateToken(): string;
    excludePassword(user: UserDocument): any;
    setHourAndMin(hour: number, min: number): Date;
    resolvePaginationQuery(query: ResolvePaginationQuery): {
        skip: number;
        page: number;
        limit: number;
        totalPages: number;
        count: number;
    };
}
