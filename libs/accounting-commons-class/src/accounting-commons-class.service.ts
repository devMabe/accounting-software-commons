import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountingCommonsClassService {
  basic = () => console.log('BASIC HELLO');
}
