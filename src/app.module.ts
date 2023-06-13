import { Module } from '@nestjs/common';
import { ListController } from './list/infrastructure/controllers/list.controller';
import { providers } from './providers';
import { GetList } from './list/application/useCases/GetList';

@Module({
  imports: [],
  controllers: [ListController],
  providers: providers,
})
export class AppModule {}
