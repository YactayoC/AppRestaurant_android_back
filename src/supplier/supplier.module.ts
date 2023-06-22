import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Supplier, SupplierSchema } from './entities/supplier.entity';

@Module({
  controllers: [SupplierController],
  providers: [SupplierService],
  imports: [MongooseModule.forFeature([{ name: Supplier.name, schema: SupplierSchema }])],
  exports: [MongooseModule, SupplierService],
})
export class SupplierModule {}
