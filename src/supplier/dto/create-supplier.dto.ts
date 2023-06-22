import { IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  direction: string;

  @IsString()
  ruc: string;

  @IsString()
  email: string;
}
