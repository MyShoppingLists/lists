import { Inject, Injectable } from '@nestjs/common';
import { List } from 'src/list/domain/List';
import { IListRepository } from 'src/list/domain/interfaces/IListRepository';

@Injectable()
export class CreateList {
  constructor(
    @Inject('ListRepository') private listRepository: IListRepository,
  ) {
    this.listRepository = listRepository;
  }
  async run(name: string): Promise<void> {
    await this.listRepository.create(List.create(name));
  }
}
