import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ default: Date.now() })
  private timestamp: Date;

  @Prop()
  private name: string;

  @Prop()
  private description: string;

  @Prop()
  private code: number;

  @Prop()
  private picture: string;

  @Prop()
  private price: number;

  @Prop()
  private stock: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
