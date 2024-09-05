import { v2, UploadApiOptions, UploadApiResponse } from 'cloudinary';
export declare class FileService {
    private readonly cloudinary;
    constructor(cloudinary: typeof v2);
    uploadResource(file: string, options?: UploadApiOptions): Promise<Pick<UploadApiResponse, 'url' | 'public_id'>>;
    deleteResource(public_id: string, options?: UploadApiOptions): Promise<void>;
}
