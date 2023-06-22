import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false, versionKey: false })
export class Supplier extends Document {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  direction: string;

  @Prop({ required: true })
  ruc: string;

  @Prop({ required: true })
  email: string;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
