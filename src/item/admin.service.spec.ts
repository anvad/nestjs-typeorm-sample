import { Test, TestingModule } from '@nestjs/testing';
import { Item2Repository } from './admin.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item2 } from './admin.entity';

describe('AdminService', () => {
  let service: Item2Repository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DATABASE_HOST || 'localhost',
          username: process.env.DATABASE_USERNAME || 'postgres',
          password: process.env.DATABASE_PASSWORD || '',
          database: process.env.DATABASE_NAME || 'postgres',
          port: parseInt(process.env.DATABASE_PORT) || 5432,
          entities: [Item2],
        }),
        TypeOrmModule.forFeature([Item2]),
      ],
      providers: [Item2Repository],
    }).compile();

    service = module.get<Item2Repository>(Item2Repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
