import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterDto } from 'src/common/dto/register.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() registerDto: RegisterDto) {
    return this.userService.create(registerDto);
  }

  @Post('favorites/:term')
  addFavorite(@Param('term') idUser: string, @Body() product: { idProduct: string; isAdd: string }) {
    return this.userService.manageProductsFavorite(idUser, product);
  }

  @Get('favorites/:term')
  findAllFavorites(@Param('term') idUser: string) {
    return this.userService.findAllFavorites(idUser);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.userService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(term, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
