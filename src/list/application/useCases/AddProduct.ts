import { List } from 'src/list/domain/List';

export class AddProductToList {
  run(product: string, list: List): void {
    list.addProduct(product);
  }
}
