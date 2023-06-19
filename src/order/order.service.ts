import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './entities/order.entity';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private readonly orderModel: Model<Order>) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      await this.orderModel.create(createOrderDto);
      return { message: 'Orden creada con exito' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(idUser: string) {
    return await this.orderModel.find({ user: idUser }).populate(['product', 'user']);
  }

  async findOne(id: string) {
    try {
      const order = await this.orderModel.findById(id).populate(['product', 'user']);
      return order;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    console.log(id, updateOrderDto);
    return `This action updates a #${id} order`;
  }
}
