import { IsIn, IsNumber, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateOrderDto {
  @IsString()
  product: string;

  @IsString()
  user: string;

  @IsNumber()
  subtotal: number;

  @IsNumber()
  total: number;

  @IsNumber()
  quantity: number;

  @IsString()
  @IsIn(['entregado', 'cancelado', 'en cocina', 'en camino'])
  state: string;
}
