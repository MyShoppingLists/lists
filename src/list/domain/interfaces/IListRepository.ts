import { List } from '../List';

export interface IListRepository {
  save(): Promise<void>;
  getList(): Promise<List>;
  getAllLists(): Promise<List[]>;
}
