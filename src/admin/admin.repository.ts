import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Admin } from './admin.entity';

@Injectable()
export class AdminRepository {
  constructor(
    @InjectRepository(Admin) private readonly repo: Repository<Admin>,
  ) {}
}