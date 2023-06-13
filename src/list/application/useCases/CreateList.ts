import { List } from '@list/domain/List';
import { IListRepository } from '@list/domain/interfaces/IListRepository';
import { Inject, Injectable } from '@nestjs/common';

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
