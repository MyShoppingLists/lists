import { Inject, Injectable } from '@nestjs/common';
import { ListDto } from '../dtos/ListDto';
import { ListMapper } from '../mappers/ListMapper';
import { IListRepository } from '@list/domain/interfaces/IListRepository';

@Injectable()
export class GetLists {
  constructor(
    @Inject('ListRepository') private listRepository: IListRepository,
  ) {
    this.listRepository = listRepository;
  }

  async run(): Promise<ListDto[]> {
    console.info(`INFO - Getting list...`);
    const list = await this.listRepository.getAllLists();

    return list.map((list) => ListMapper.toDto(list));
  }
}
