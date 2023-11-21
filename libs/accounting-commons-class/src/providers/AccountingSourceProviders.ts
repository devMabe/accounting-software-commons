import { AccountingSource } from 'src/entities/AccountingSourceEntity';
import { ACCOUNTING_SOURCE_REPOSITORY } from './config';

export const AccountingSourceProviders = [
  {
    provide: ACCOUNTING_SOURCE_REPOSITORY,
    useValue: AccountingSource,
  },
];
