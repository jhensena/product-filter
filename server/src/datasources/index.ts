import { DataSource } from 'typeorm';
import {
  AttributeKey,
  Category,
  CategoryAttribute,
  Manufacturer,
  Product,
  ProductAttribute,
  ProductCategory,
  ProductManufacturer
} from '~/entities';

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } = process.env;

export const connection = new DataSource({
  type: 'postgres',
  host: DATABASE_HOST,
  port: +(DATABASE_PORT || 5432),
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [
    AttributeKey,
    Category,
    CategoryAttribute,
    Manufacturer,
    Product,
    ProductAttribute,
    ProductCategory,
    ProductManufacturer
  ],
  synchronize: false,
  logging: false
});

export const { manager } = connection;
