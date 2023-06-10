import { InMemoryListRepository } from './list/infrastructure/repositories/InMemoryListRepository';

export const providers = {
  ListRepository: {
    provide: 'ListRepository',
    useClass: InMemoryListRepository,
  },
};
