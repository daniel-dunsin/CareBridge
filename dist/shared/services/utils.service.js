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
exports.UtilService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
let UtilService = class UtilService {
    constructor(configService) {
        this.configService = configService;
    }
    async hashPassword(password) {
        const saltFactor = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, saltFactor);
        return hashedPassword;
    }
    async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
    generateToken() {
        return crypto.randomBytes(32).toString('hex');
    }
    excludePassword(user) {
        delete user['_doc'].password;
        return user['_doc'];
    }
    setHourAndMin(hour, min) {
        const today = new Date();
        today.setUTCHours(hour);
        today.setUTCMinutes(min);
        return today;
    }
    resolvePaginationQuery(query) {
        const page = Number(query.page) || 1;
        let limit = query?.limit ?? 100000000000;
        const skip = (page - 1) * limit;
        console.log(query.count, limit);
        const totalPages = Math.ceil(query.count / limit);
        if (query?.limit === 0)
            limit = query.count;
        if (query?.limit === 0 && query.count === 0)
            limit++;
        return {
            skip,
            page,
            limit,
            totalPages,
            count: query.count,
        };
    }
};
exports.UtilService = UtilService;
exports.UtilService = UtilService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UtilService);
//# sourceMappingURL=utils.service.js.map