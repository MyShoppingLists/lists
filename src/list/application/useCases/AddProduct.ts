import { Inject, Injectable } from '@nestjs/common';
import { List } from 'src/list/domain/List';
import { IListRepository } from 'src/list/domain/interfaces/IListRepository';

@Injectable()
export class AddProductToList {
  constructor(
    @Inject('ListRepository') private listRepository: IListRepository,
  ) {
    this.listRepository = listRepository;
  }

  async run(product: string, listId: string): Promise<void> {
    const list = await this.listRepository.getList(listId);
    list.addProduct(product);
  }
}
