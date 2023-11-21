import { IAccount } from './AccountModel';
import { ICatalog } from './CatalogModel';
import { IthirdyParthy } from './ThirdyParthyModel';
import { IAccountingVoucher } from './AccountingVoucherModel';

export interface IAccountingVoucherRecord {
  accountingVoucherId?: number;
  accountingVoucher?: IAccountingVoucher;
  movementId?: number;
  movement?: ICatalog;
  accountId?: number;
  account?: IAccount;
  thirdyId?: string;
  thirdyParthy?: IthirdyParthy;
  debit?: number;
  credit?: number;
}
