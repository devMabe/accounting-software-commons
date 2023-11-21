import { Test, TestingModule } from '@nestjs/testing';
import { AccountingCommonsClassService } from './accounting-commons-class.service';

describe('AccountingCommonsClassService', () => {
  let service: AccountingCommonsClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountingCommonsClassService],
    }).compile();

    service = module.get<AccountingCommonsClassService>(AccountingCommonsClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
