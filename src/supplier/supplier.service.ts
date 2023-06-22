import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Supplier } from './entities/supplier.entity';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class SupplierService {
  constructor(@InjectModel(Supplier.name) private readonly supplierModel: Model<Supplier>) {}

  async create(createSupplierDto: CreateSupplierDto) {
    createSupplierDto.name = createSupplierDto.name.toLowerCase();

    try {
      await this.supplierModel.create(createSupplierDto);
      return { message: 'Supplier created' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll() {
    return this.supplierModel.find();
  }

  async findOne(id: string) {
    let supplier: Supplier;

    try {
      if (!isValidObjectId(id)) {
        throw new NotFoundException(`El proveedor no existe`);
      }

      supplier = await this.supplierModel.findOne({ id });
      return supplier;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    const supplier = await this.findOne(id);
    updateSupplierDto.name = updateSupplierDto.name.toLowerCase();

    try {
      await supplier.updateOne(updateSupplierDto);
      return { message: 'Supplier updated' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} supplier`;
  }
}
