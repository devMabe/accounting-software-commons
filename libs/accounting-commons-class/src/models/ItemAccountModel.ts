import { IAccount } from './AccountModel';
import { IItem } from './ItemModel';

export interface IItemAccount {
  itemId: number;
  item?: IItem;
  accountId: number;
  account?: IAccount;
}
