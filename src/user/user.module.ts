import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './entities/user.entity';
import { ProductModule } from 'src/product/product.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), ProductModule],
  exports: [MongooseModule, UserService],
})
export class UserModule {}
