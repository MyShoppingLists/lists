import { List } from 'src/list/domain/List';

export class CreateList {
  run(name: string): void {
    List.create(name);
  }
}
