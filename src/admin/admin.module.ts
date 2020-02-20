import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Admin } from './admin.entity';
import { AdminService1 } from './admin.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminService1],
})
export class AdminModule {}
