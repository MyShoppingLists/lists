import { IListRepository } from '@list/domain/interfaces/IListRepository';

export const listRepositoryMock: jest.Mocked<IListRepository> = {
  getList: jest.fn(),
  create: jest.fn(),
  getAllLists: jest.fn(),
};
