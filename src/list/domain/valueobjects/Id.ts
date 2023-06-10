import { v4 as uuid } from 'uuid';
import { ValueObject } from './ValueObject';

export class Id extends ValueObject<string> {
  constructor(value?: string) {
    super(value ? value : uuid());
  }
}
