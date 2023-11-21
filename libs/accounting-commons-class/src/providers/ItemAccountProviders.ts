import { ItemAccount } from 'src/entities/ItemAccountEntity';
import { ITEM_ACCOUNT_REPOSITORY } from './config';

export const ItemAccountProviders = [
  {
    provide: ITEM_ACCOUNT_REPOSITORY,
    useValue: ItemAccount,
  },
];
