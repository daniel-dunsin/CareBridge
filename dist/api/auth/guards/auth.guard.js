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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_schema_1 = require("../schema/jwt.schema");
const mongoose_2 = require("mongoose");
const jwt_enum_1 = require("../enums/jwt.enum");
const core_1 = require("@nestjs/core");
const auth_decorators_1 = require("../../../shared/decorators/auth.decorators");
let AuthGuard = class AuthGuard {
    constructor(reflector, jwtService, _jwtModel) {
        this.reflector = reflector;
        this.jwtService = jwtService;
        this._jwtModel = _jwtModel;
    }
    async canActivate(context) {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const publicRoute = this.reflector.get(auth_decorators_1.IsPublic, context.getHandler());
        if (publicRoute)
            return true;
        const user = await this.validateToken(req);
        req['user'] = user;
        const roles = this.reflector.get(auth_decorators_1.Roles, context.getHandler());
        if (roles && roles.length > 0) {
            if (!roles.includes(user.role)) {
                throw new common_1.UnauthorizedException(`Only ${roles.join(',')} have access`);
            }
        }
        return true;
    }
    async validateToken(req) {
        try {
            const authHeader = req.headers['authorization'];
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                throw new common_1.UnauthorizedException('Unauthorized!');
            }
            const token = authHeader.split(' ')[1];
            if (!token) {
                throw new common_1.UnauthorizedException('Unauthorized!');
            }
            const jwtToken = await this._jwtModel.find({
                token,
                type: jwt_enum_1.JwtType.access,
            });
            if (!jwtToken) {
                throw new common_1.ForbiddenException('Session is invalid or has expired');
            }
            const payload = await this.jwtService.verifyAsync(token);
            if (!payload) {
                throw new common_1.ForbiddenException('Session is invalid or has expired');
            }
            return payload;
        }
        catch (error) {
            throw new common_1.ForbiddenException('Session is invalid or has expired');
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_1.InjectModel)(jwt_schema_1.Jwt.name)),
    __metadata("design:paramtypes", [core_1.Reflector,
        jwt_1.JwtService,
        mongoose_2.Model])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map