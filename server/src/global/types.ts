import { AttributeKey, Manufacturer, Product, ProductAttribute } from '~/entities';

export interface ProductResponse {
  products: Array<Product>;
  attributes: Array<{
    categoryAttribute: AttributeKey;
    productAttributes: Array<(ProductAttribute | Manufacturer) & { enabled: boolean }>;
  }>;
}
