"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.IsPublic = exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
exports.Roles = core_1.Reflector.createDecorator();
exports.IsPublic = core_1.Reflector.createDecorator();
exports.Auth = (0, common_1.createParamDecorator)((props, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return props ? req['user'][props] : req['user'];
});
//# sourceMappingURL=auth.decorators.js.map