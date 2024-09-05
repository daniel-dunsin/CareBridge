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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_provider_1 = require("./user.provider");
const auth_decorators_1 = require("../../shared/decorators/auth.decorators");
const pipes_1 = require("../../core/pipes");
let UserController = class UserController {
    constructor(userProvider) {
        this.userProvider = userProvider;
    }
    async getUser(user) {
        const data = await this.userProvider.getUser(user);
        return data;
    }
    async updateProfilePicture(userId, picture) {
        const data = await this.userProvider.updateProfilePicture(picture, userId);
        return data;
    }
    async deleteProfilePicture(userId) {
        const data = await this.userProvider.removeProfilePicture(userId);
        return data;
    }
    async deleteByEmail(email) {
        const data = await this.userProvider.deleteByEmail(email);
        return data;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, auth_decorators_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Put)('/profile-picture'),
    (0, swagger_1.ApiBody)({
        schema: { type: 'object', properties: { picture: { type: 'string' } } },
    }),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __param(1, (0, common_1.Body)('picture', pipes_1.Base64Pipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfilePicture", null);
__decorate([
    (0, common_1.Delete)('/profile-picture'),
    __param(0, (0, auth_decorators_1.Auth)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteProfilePicture", null);
__decorate([
    (0, common_1.Delete)('email'),
    (0, swagger_1.ApiBody)({
        schema: { type: 'object', properties: { email: { type: 'string' } } },
    }),
    (0, auth_decorators_1.IsPublic)(),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteByEmail", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)('user'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [user_provider_1.UserProvider])
], UserController);
//# sourceMappingURL=user.controller.js.map