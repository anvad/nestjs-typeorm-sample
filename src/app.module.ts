import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './item/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Item2 } from './item/admin.entity';

@Module({
  imports: [
    AdminModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || 'postgres',
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      entities: [Item2],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
