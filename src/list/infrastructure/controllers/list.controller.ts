import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { GetList } from '../../application/useCases/GetList';
import { ListDto } from 'src/list/application/dtos/ListDto';
import { CreateList } from 'src/list/application/useCases/CreateList';
import { AddProductToList } from 'src/list/application/useCases/AddProduct';

@Controller()
export class ListController {
  constructor(
    private readonly getListUseCase: GetList,
    private readonly createListUseCase: CreateList,
    private readonly addProductUseCase: AddProductToList,
  ) {
    this.getListUseCase = getListUseCase;
    this.createListUseCase = createListUseCase;
    this.addProductUseCase = addProductUseCase;
  }

  @Get('/list')
  async getList(): Promise<ListDto> {
    return this.getListUseCase.run('');
  }

  @Post('/list')
  async createList(): Promise<void> {
    return this.createListUseCase.run('');
  }

  @Patch('/list/:listId/:productId')
  async addProduct(
    @Param('listId') listId: string,
    @Param('productId') productId: string,
  ): Promise<void> {
    return this.addProductUseCase.run(productId, listId);
  }
}
