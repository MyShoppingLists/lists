import { AggregateRoot } from './AggregateRoot';
import { Id } from './valueobjects/Id';

export class List extends AggregateRoot {
  name: string; //TODO - Convert to value object
  readonly products: string[]; //TODO - Convert to value object

  private constructor(id: Id, name: string, products?: string[]) {
    super(id);
    this.name = name;
    this.products = products ? products : [];
  }

  public static create(name: string): List {
    const id = new Id();
    return new List(id, name);
  }

  addProduct(product: string): void {
    this.products.push(product);
  }

  renameList(name: string): void {
    this.name = name;
  }

  listProducts(): string[] {
    return this.products;
  }

  static toDomain(id: string, name: string, products: string[]): List {
    return new List(new Id(id), name, products);
  }
}
