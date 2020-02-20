import { Test, TestingModule } from '@nestjs/testing';
import { AdminRepository } from './admin.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';

describe('AdminService', () => {
  let service: AdminRepository;

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
          entities: [Admin],
        }),
        TypeOrmModule.forFeature([Admin]),
      ],
      providers: [AdminRepository],
    }).compile();

    service = module.get<AdminRepository>(AdminRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
