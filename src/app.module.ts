import { Module } from '@nestjs/common';
import { ListController } from './list/infrastructure/controllers/list.controller';
import { providers } from './providers';
import { GetList } from './list/application/useCases/GetList';

const { ListRepository } = providers;
@Module({
  imports: [],
  controllers: [ListController],
  providers: [GetList, ListRepository],
})
export class AppModule {}
