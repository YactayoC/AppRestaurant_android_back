import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUrl, MinLength } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @IsString()
  @IsOptional()
  direction?: string;

  @IsString()
  @IsPhoneNumber('PE')
  phone: string;

  @IsUrl()
  @IsOptional()
  profile?: string;

  @IsOptional()
  @IsArray()
  @Type(() => Product)
  favoriteProducts?: Product[];
}
