import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { schemaOptions } from 'src/shared/constants/db.const';
import { Appointment, AppointmentDocument } from './appointment.schema';
import { DiagnosisDocument } from '../types';
import { DiagnosisRef } from '../enums';

@Schema(schemaOptions)
export class Consultation {
  @Prop({ type: Types.ObjectId, ref: Appointment.name })
  appointment: AppointmentDocument;

  @Prop({ type: Types.ObjectId, refPath: 'diagnosisRef' })
  diagnosis: DiagnosisDocument;

  @Prop({ type: String, enum: Object.values(DiagnosisRef) })
  diagnosisRef: string;

  @Prop()
  consultationNote: string;

  @Prop()
  treatmentPlan: string;

  @Prop()
  symptoms: string;
}

export type ConsultationDocument = HydratedDocument<Consultation>;
export const ConsultationSchema = SchemaFactory.createForClass(Consultation);
