import { UserProvider } from './user.provider';
import { UserDocument } from './schema/user.schema';
export declare class UserController {
    private readonly userProvider;
    constructor(userProvider: UserProvider);
    getUser(user: UserDocument): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    updateProfilePicture(userId: string, picture: string): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteProfilePicture(userId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    deleteByEmail(email: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
