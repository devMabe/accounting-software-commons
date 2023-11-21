import { AccountingVoucherRecord } from 'src/entities/AccountingVoucherRecordEntity';
import { ACCOUNTING_VOUCHER_RECORD_REPOSITORY } from './config';

export const AccountingVoucherRecordProviders = [
  {
    provide: ACCOUNTING_VOUCHER_RECORD_REPOSITORY,
    useValue: AccountingVoucherRecord,
  },
];
