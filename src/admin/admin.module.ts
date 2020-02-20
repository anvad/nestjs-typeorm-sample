import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Admin } from './admin.entity';
import { AdminService } from './admin.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminService],
})
export class AdminModule {}
