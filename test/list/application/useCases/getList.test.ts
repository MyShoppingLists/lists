import { GetList } from '@list/application/useCases/GetList';
import { listRepositoryMock } from '../../__mocks__/listRepositoryMock';
import { List } from '@list/domain/List';

const list = List.create('list1', '1');

describe('Get list use case', () => {
  beforeEach(() => {
    listRepositoryMock.getList.mockResolvedValue(list);
  });
  it('should get a list based on the id', async () => {
    // Given
    const listId = '1';
    const getListUseCase = new GetList(listRepositoryMock);

    // When
    const result = await getListUseCase.run(listId);

    // Then
    expect(result).toEqual({ id: '1', name: 'list1', products: [] });
    expect(listRepositoryMock.getList).toHaveBeenCalledWith(listId);
  });
});
