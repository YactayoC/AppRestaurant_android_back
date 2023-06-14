import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService, configService: ConfigService) {
    super({
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFRomRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { id } = payload;
    const user = await this.userService.findOne(id);

    if (!user) throw new UnauthorizedException('Invalid token');
    return user;
  }
}
