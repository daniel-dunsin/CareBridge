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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
let FileService = class FileService {
    constructor(cloudinary) {
        this.cloudinary = cloudinary;
    }
    async uploadResource(file, options = {}) {
        try {
            const data = await this.cloudinary.uploader.upload(file, {
                ...options,
                folder: 'pendulum',
            });
            return { url: data.secure_url, public_id: data.public_id };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(`Unable to upload resource to cloud ${error.message ?? error}`);
        }
    }
    async deleteResource(public_id, options = {}) {
        try {
            await this.cloudinary.uploader.destroy(public_id, { ...options });
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(`Unable to delete resource from cloud ${error.message ?? error}`);
        }
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('Uploader')),
    __metadata("design:paramtypes", [Object])
], FileService);
//# sourceMappingURL=file.service.js.map