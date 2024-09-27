import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';
import { envSchema } from './shared/schemas/env.schema';
import { ApiModule } from './api/api.module';
import { AIModule } from './api/ai/ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: envSchema,
    }),
    SharedModule,
    ApiModule,
    AIModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
