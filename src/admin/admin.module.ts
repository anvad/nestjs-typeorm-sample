import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Admin } from './admin.entity';
import { Admin1Repository } from './admin.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [Admin1Repository],
})
export class AdminModule {}
