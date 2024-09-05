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
exports.UserProvider = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const utils_service_1 = require("../../shared/services/utils.service");
const file_service_1 = require("../../shared/file/file.service");
const images_const_1 = require("../../shared/constants/images.const");
let UserProvider = class UserProvider {
    constructor(userService, utilService, fileService) {
        this.userService = userService;
        this.utilService = utilService;
        this.fileService = fileService;
    }
    async getUser(user) {
        const data = await this.userService.getUser({ _id: user._id });
        if (!data)
            throw new common_1.NotFoundException('Profile not found');
        return {
            success: true,
            message: 'user info fetched',
            data: this.utilService.excludePassword(data),
        };
    }
    async updateProfilePicture(picture, userId) {
        const user = await this.userService.getUser({ _id: userId });
        if (!user)
            throw new common_1.NotFoundException('User does not exist');
        const profilePictureId = user.profilePictureId;
        const { url, public_id } = await this.fileService.uploadResource(picture);
        user.profilePicture = url;
        user.profilePictureId = public_id;
        await user.save();
        if (profilePictureId) {
            await this.fileService.deleteResource(profilePictureId);
        }
        return {
            success: true,
            message: 'profile picture uploaded successfully',
        };
    }
    async deleteByEmail(email) {
        await this.userService.deleteUser({ email });
        return {
            success: true,
            message: 'deleted',
        };
    }
    async removeProfilePicture(userId) {
        let data = await this.userService.getUser({ _id: userId });
        if (!data) {
            throw new common_1.NotFoundException('User not found');
        }
        const previousId = data.profilePictureId;
        data.profilePicture = images_const_1.default.profilePicture;
        data.profilePictureId = '';
        data = await data.save();
        if (previousId) {
            await this.fileService.deleteResource(previousId);
        }
        return {
            success: true,
            message: 'profile picture updated',
            data: this.utilService.excludePassword(data),
        };
    }
};
exports.UserProvider = UserProvider;
exports.UserProvider = UserProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        utils_service_1.UtilService,
        file_service_1.FileService])
], UserProvider);
//# sourceMappingURL=user.provider.js.map