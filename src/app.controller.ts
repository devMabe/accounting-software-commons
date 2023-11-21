import { AccountingCommonsClassService } from '@app/accounting-commons-class';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    private readonly accountingService: AccountingCommonsClassService,
  ) {}

  @Get()
  public gettings() {
    this.accountingService.basic();
    return 'HOla cv';
  }
}
