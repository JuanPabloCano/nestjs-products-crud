import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from '../../models/product/Product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsServices {
  constructor(
    @InjectModel('products') private readonly products: Model<ProductDocument>,
  ) {}

  public async createProduct(product: Product): Promise<Product> {
    const newProduct = new this.products(product);
    return newProduct.save();
  }

  public async getAllProducts(): Promise<Product[]> {
    return this.products.find({});
  }

  public async findProductById(id: string): Promise<Product> {
    return this.products.findById(id);
  }

  public async deleteProductById(id: string): Promise<Product> {
    return this.products.findByIdAndRemove(id);
  }

  public async updateProduct(id: string, product: Product): Promise<Product> {
    return this.products.findByIdAndUpdate(
      id,
      { $set: product },
      { new: true },
    );
  }
}
