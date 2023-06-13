import { List } from '../List';

export interface IListRepository {
  create(list: List): Promise<void>;
  getList(id: string): Promise<List>;
  getAllLists(): Promise<List[]>;
}
