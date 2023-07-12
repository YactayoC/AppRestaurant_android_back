/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterDto } from 'src/common/dto/register.dto';
import { User } from './entities/user.entity';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly productService: ProductService
  ) {}

  async create(registerDto: RegisterDto) {
    try {
      const user = await this.userModel.create(registerDto);
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async manageProductsFavorite(idUser: string, productReceived: { idProduct: string; isAdd: string }) {
    try {
      const { idProduct, isAdd } = productReceived;
      const isAddBoolean = isAdd === 'true' ? true : false;
      const user = await this.findOne(idUser);
      const product = await this.productService.findOne(idProduct);

      if (isAddBoolean) {
        const isProductInFavorites = user.favoriteProducts.find((favoriteProduct) => {
          return favoriteProduct._id.toString() === idProduct;
        });

        if (isProductInFavorites) {
          return { message: 'El producto ya esta en favoritos' };
        } else {
          user.favoriteProducts.push(product);
          await user.save();
          return { message: 'Producto agregado a favoritos' };
        }
      }
      if (!isAddBoolean) {
        const updatedFavoriteProducts = user.favoriteProducts.filter((product) => {
          return product._id.toString() !== idProduct;
        });

        user.favoriteProducts = updatedFavoriteProducts;
        await user.save();
        return { message: 'Producto removido de favoritos' };
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAllFavorites(idUser: string) {
    try {
      const user = await this.userModel.findById(idUser).populate('favoriteProducts');
      return user.favoriteProducts;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(term: string) {
    let user: User | null = null;

    try {
      if (!user && isValidObjectId(term)) {
        user = await this.userModel.findById(term);
      }

      if (!user) {
        user = await this.userModel.findOne({ email: term.trim() });
      }

      if (!user) {
        return null;
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(term: string, updateUserDto: UpdateUserDto) {
    const hassedPassword = await bcrypt.hash(updateUserDto.password, 10);

    try {
      const user = await this.findOne(term);
      await user.updateOne({ ...updateUserDto, password: hassedPassword });
      return { messsage: 'Se actualizaron los datos correctamente' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    const user = await this.findOne(id);

    try {
      return { messsage: `The user is disabled` };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
