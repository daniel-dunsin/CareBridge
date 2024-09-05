import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';
import { envSchema } from './shared/schemas/env.schema';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: envSchema,
    }),
    SharedModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
