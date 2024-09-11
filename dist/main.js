"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const validation_exception_1 = require("./core/exceptions/validation.exception");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const global_filter_1 = require("./core/filters/global.filter");
const express = require("express");
const auth_module_1 = require("./api/auth/auth.module");
const auth_guard_1 = require("./api/auth/guards/auth.guard");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    const allowedOrigins = [
        'http://localhost:3000',
        'https://carebridge-xi.vercel.app',
        'https://bdmeds-frontend.onrender.com'
    ];
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: false, limit: '50mb' }));
    app.disable('x-powered-by');
    app.enableCors({
        origin: allowedOrigins,
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        exceptionFactory(errors) {
            return new validation_exception_1.ValidationException(errors);
        },
    }));
    const httpAdapterHost = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new global_filter_1.GlobalExceptionFilter(httpAdapterHost));
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: '1',
    });
    const authGuard = app.select(auth_module_1.AuthModule).get(auth_guard_1.AuthGuard);
    app.useGlobalGuards(authGuard);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('CareBridge 🏥')
        .setDescription('One or two!')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const swaggerDoc = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('/v1/docs', app, swaggerDoc, { useGlobalPrefix: true });
    app.use('/api/v1/health-check', (_, res) => {
        res.json({ status: 'OK' });
    });
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get('PORT') || 3000;
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map