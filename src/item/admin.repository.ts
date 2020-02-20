import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item2 } from './admin.entity';

@Injectable()
export class Item2Repository {
  constructor(
    @InjectRepository(Item2) private readonly repo: Repository<Item2>,
  ) {}
}
