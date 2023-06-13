import { List } from '../../domain/List';
import { ListDto } from '../dtos/ListDto';

export class ListMapper {
  static toDomain(listDto: ListDto): List {
    const { id, name, products } = listDto;

    return List.toDomain(id, name, products);
  }

  static toDto(list: List): ListDto {
    const {
      id: { value },
      name,
      products,
    } = list;

    return { id: value, name, products };
  }
}
