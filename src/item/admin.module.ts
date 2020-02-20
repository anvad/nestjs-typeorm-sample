import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Item2 } from './admin.entity';
import { Item2Repository } from './admin.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Item2])],
  providers: [Item2Repository],
})
export class AdminModule {}
