import { Inject, Injectable } from '@nestjs/common';
import { ListDto } from '../dtos/ListDto';
import { ListMapper } from '../mappers/ListMapper';
import { IListRepository } from '../../domain/interfaces/IListRepository';

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
