import { Account } from 'src/entities/AccountEnttity';
import { ACCOUNT_REPOSITORY } from './config';

export const pucProviders = [
  {
    provide: ACCOUNT_REPOSITORY,
    useValue: Account,
  },
];
