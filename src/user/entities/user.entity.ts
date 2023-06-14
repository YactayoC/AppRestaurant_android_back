import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/product/entities/product.entity';

@Schema({ timestamps: true, versionKey: false })
export class User extends Document {
  @Prop({ required: true })
  fullname: string;

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: null })
  direction: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ default: null })
  profile: string;

  // @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }] })
  // favoriteProducts: Product[];
  @Prop({ type: [{ type: Object }] })
  favoriteProducts: Product[];
}

export const UserSchema = SchemaFactory.createForClass(User);
