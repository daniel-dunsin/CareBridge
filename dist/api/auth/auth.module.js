"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_schema_1 = require("./schema/jwt.schema");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const token_module_1 = require("../token/token.module");
const shared_module_1 = require("../../shared/shared.module");
const user_module_1 = require("../user/user.module");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const auth_guard_1 = require("./guards/auth.guard");
const doctor_module_1 = require("../doctor/doctor.module");
const patient_module_1 = require("../patient/patient.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: jwt_schema_1.Jwt.name,
                    useFactory() {
                        const schema = jwt_schema_1.JwtSchema;
                        return schema;
                    },
                },
            ]),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory(configService) {
                    return {
                        global: true,
                        signOptions: { expiresIn: '1d' },
                        secret: Buffer.from(configService.get('JWT_SECRET'), 'base64').toString('ascii'),
                    };
                },
            }),
            token_module_1.TokenModule,
            shared_module_1.SharedModule,
            user_module_1.UserModule,
            doctor_module_1.DoctorModule,
            patient_module_1.PatientModule,
        ],
        providers: [auth_service_1.AuthService, auth_guard_1.AuthGuard],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map