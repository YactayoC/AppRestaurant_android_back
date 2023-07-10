/* eslint-disable prettier/prettier */
import { IsIn, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  product: string;

  @IsString()
  user: string;

  @IsString()
  direction: string;

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
