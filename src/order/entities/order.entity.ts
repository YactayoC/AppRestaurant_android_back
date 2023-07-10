import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Order extends Document {
  @Prop({ type: Types.ObjectId, required: true, ref: 'Product' })
  product: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  user: Types.ObjectId;

  @Prop({ required: true })
  direction: string;

  @Prop({ required: true })
  subtotal: number;

  @Prop({ required: true, min: 0 })
  total: number;

  @Prop({ required: true, min: 0 })
  quantity: number;

  @Prop({ required: true })
  state: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
