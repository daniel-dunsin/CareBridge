import { UserService } from './user.service';
import { UserDocument } from './schema/user.schema';
import { UtilService } from 'src/shared/services/utils.service';
import { FileService } from 'src/shared/file/file.service';
export declare class UserProvider {
    private readonly userService;
    private readonly utilService;
    private readonly fileService;
    constructor(userService: UserService, utilService: UtilService, fileService: FileService);
    getUser(user: UserDocument): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    updateProfilePicture(picture: string, userId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteByEmail(email: string): Promise<{
        success: boolean;
        message: string;
    }>;
    removeProfilePicture(userId: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
}
