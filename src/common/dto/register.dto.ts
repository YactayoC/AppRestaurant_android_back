import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUrl, MinLength } from 'class-validator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class RegisterDto extends CreateUserDto {
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
  @IsPhoneNumber('PE')
  phone: string;

  @IsUrl()
  profile: string;
}
