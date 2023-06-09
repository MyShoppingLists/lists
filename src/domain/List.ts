import { AggregateRoot } from './AggregateRoot';
import { Id } from './valueobjects/Id';

export class List extends AggregateRoot {
  private name: string;
  private products: string[];

  private constructor(id: Id, name: string) {
    super(id);
    this.name = name;
    this.products = [];
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
}
