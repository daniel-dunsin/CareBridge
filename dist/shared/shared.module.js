"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const utils_service_1 = require("./services/utils.service");
const mail_module_1 = require("./mail/mail.module");
const config_1 = require("@nestjs/config");
const file_service_1 = require("./file/file.service");
const file_provider_1 = require("./file/file.provider");
const zoom_module_1 = require("./zoom/zoom.module");
let SharedModule = class SharedModule {
};
exports.SharedModule = SharedModule;
exports.SharedModule = SharedModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule, mail_module_1.MailModule, zoom_module_1.ZoomModule],
        providers: [utils_service_1.UtilService, file_provider_1.FileProvider, file_service_1.FileService],
        exports: [mail_module_1.MailModule, utils_service_1.UtilService, file_service_1.FileService],
    })
], SharedModule);
//# sourceMappingURL=shared.module.js.map