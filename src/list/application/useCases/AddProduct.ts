import { IListRepository } from '@list/domain/interfaces/IListRepository';
import { Inject, Injectable } from '@nestjs/common';

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
