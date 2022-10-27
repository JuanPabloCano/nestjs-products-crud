import { ProductsServices } from '../../services/product-services/products.services';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from '../../models/product/Product';

@Controller()
export class ProductController {
  constructor(private readonly productsServices: ProductsServices) {
  }

  @Post('/api/products')
  public async createProduct(@Body() product: Product): Promise<Product> {
    return this.productsServices.createProduct(product);
  }

  @Get('api/products')
  public async findAllProducts(): Promise<Product[]> {
    return this.productsServices.getAllProducts();
  }

  @Get('api/products/:id')
  public async findProductById(@Param() param: any): Promise<Product> {
    const { id } = param;
    return this.productsServices.findProductById(id);
  }

  @Delete('api/products/:id')
  public async deleteProductById(@Param() param: any): Promise<Product> {
    const { id } = param;
    return this.productsServices.deleteProductById(id);
  }

  @Put('api/products/:id')
  public async updateProductById(
    @Param() param: any,
    @Body() product: Product,
  ): Promise<Product> {
    const { id } = param;
    return this.productsServices.updateProduct(id, product);
  }
}
