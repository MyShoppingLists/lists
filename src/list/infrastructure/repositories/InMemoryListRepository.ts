import { List } from 'src/list/domain/List';
import { IListRepository } from 'src/list/domain/interfaces/IListRepository';

export class InMemoryListRepository implements IListRepository {
  private lists: List[] = [List.create('name list1')];

  async getAllLists(): Promise<List[]> {
    return this.lists;
  }

  async save(): Promise<void> {
    this.lists.push(List.create('new List'));
  }

  async getList(): Promise<List> {
    console.log('INFO - List: ', this.lists[0]);
    return this.lists[0];
  }
}
