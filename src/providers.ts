import { Provider } from '@nestjs/common';
import { InMemoryListRepository } from './list/infrastructure/repositories/InMemoryListRepository';
import { GetList } from './list/application/useCases/GetList';
import { GetLists } from './list/application/useCases/GetLists';
import { CreateList } from './list/application/useCases/CreateList';
import { AddProductToList } from './list/application/useCases/AddProduct';

export const providers = [
  {
    provide: 'ListRepository',
    useClass: InMemoryListRepository,
  },
  GetList,
  GetLists,
  CreateList,
  AddProductToList,
] as Provider[];
