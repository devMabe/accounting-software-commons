import { Module } from '@nestjs/common';
import { AccountingCommonsClassService } from '@app/accounting-commons-class';
import { AppController } from './app.controller';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AccountingCommonsClassService],
})
export class AppModule {}
