import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Admin } from './admin.entity';
import { AdminRepository } from './admin.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminRepository],
})
export class AdminModule {}
