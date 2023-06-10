import { Controller, Get } from '@nestjs/common';
import { GetList } from '../../application/useCases/GetList';
import { ListDto } from 'src/list/application/dtos/ListDto';

@Controller()
export class ListController {
  constructor(private readonly getListUseCase: GetList) {
    this.getListUseCase = getListUseCase;
  }

  @Get('/list')
  async getList(): Promise<ListDto> {
    return this.getListUseCase.run();
  }
}
