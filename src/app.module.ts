import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './models/product/Product';
import { ProductController } from './controllers/product-controllers/products.controllers';
import { ProductsServices } from './services/product-services/products.services';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([
      {
        name: 'products',
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductsServices],
})
export class AppModule {}
