import { Id } from './valueobjects/Id';

export abstract class AggregateRoot {
  readonly id: Id;

  constructor(id: Id) {
    this.id = id;
  }
}
