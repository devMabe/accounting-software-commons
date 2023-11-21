import { AccountingVoucher } from 'src/entities/AccountingVoucherEntity';
import { ACCOUNTING_VOUCHER_REPOSITORY } from './config';

export const AccountingVoucherProviders = [
  {
    provide: ACCOUNTING_VOUCHER_REPOSITORY,
    useValue: AccountingVoucher,
  },
];
