import { List } from '@list/domain/List';
import { IListRepository } from '@list/domain/interfaces/IListRepository';

export class InMemoryListRepository implements IListRepository {
  private lists: List[] = [List.create('name list1')];

  async getAllLists(): Promise<List[]> {
    return this.lists;
  }

  async create(list: List): Promise<void> {
    this.lists.push(list);
  }

  async getList(id: string): Promise<List> {
    console.log(
      'INFO - List: ',
      this.lists.find((l) => l.id.value === id),
    );

    if (id) {
      const list = this.lists.find((l) => l.id.value === id);
      if (!list) throw new Error();
      return list;
    }

    return this.lists[0];
  }
}
