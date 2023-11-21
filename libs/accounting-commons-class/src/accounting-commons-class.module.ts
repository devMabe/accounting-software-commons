import { Module } from '@nestjs/common';
import { AccountingCommonsClassService } from './accounting-commons-class.service';

@Module({
  providers: [AccountingCommonsClassService],
  exports: [AccountingCommonsClassService],
})
export class AccountingCommonsClassModule {}
