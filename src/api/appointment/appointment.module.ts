import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './schemas/appointment.schema';
import {
  Consultation,
  ConsultationSchema,
} from './schemas/consultation.schema';
import { AppointmentStatus } from './enums';
import { AppointmentController } from './controllers/appointment.controller';
import { ConsultationController } from './controllers/consulation.controller';
import { AppointmentService } from './services/appointment.service';
import { AppointmentProvider } from './providers/appointment.provider';
import { ConsultationProvider } from './providers/consultation.provider';
import { ConsultationService } from './services/consulation.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Appointment.name,
        useFactory() {
          const schema = AppointmentSchema;
          schema.pre('save', function () {
            if (
              this.isModified('patientStatus') ||
              this.isModified('doctorStatus')
            ) {
              if (
                this.patientStatus === AppointmentStatus.SUCCESSFUL &&
                this.doctorStatus === AppointmentStatus.SUCCESSFUL
              ) {
                this.status === AppointmentStatus.SUCCESSFUL;
              } else if (
                this.patientStatus === AppointmentStatus.FAILED &&
                this.doctorStatus === AppointmentStatus.FAILED
              ) {
                this.status === AppointmentStatus.FAILED;
              }
            }

            return;
          });
          return schema;
        },
      },
      {
        name: Consultation.name,
        useFactory() {
          const schema = ConsultationSchema;
          return schema;
        },
      },
    ]),
  ],
  controllers: [AppointmentController, ConsultationController],
  providers: [
    AppointmentService,
    AppointmentProvider,
    ConsultationProvider,
    ConsultationService,
  ],
  exports: [AppointmentService],
})
export class AppointmentModule {}
