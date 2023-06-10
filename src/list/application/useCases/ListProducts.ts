import { List } from 'src/list/domain/List';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListProducts {
  run(list: List): string[] {
    return list.listProducts();
  }
}
