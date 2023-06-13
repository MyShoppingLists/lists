import { Inject, Injectable } from '@nestjs/common';
import { IListRepository } from 'src/list/domain/interfaces/IListRepository';
import { ListDto } from '../dtos/ListDto';
import { ListMapper } from '../mappers/ListMapper';

@Injectable()
export class GetList {
  constructor(
    @Inject('ListRepository') private listRepository: IListRepository,
  ) {
    this.listRepository = listRepository;
  }

  async run(listId: string): Promise<ListDto> {
    console.info(`INFO - Getting list...`);
    const list = await this.listRepository.getList(listId);
    return ListMapper.toDto(list);
  }
}
