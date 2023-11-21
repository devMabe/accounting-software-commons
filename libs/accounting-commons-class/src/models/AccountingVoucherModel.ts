import { IAccount } from './AccountModel';
import { IOrganization } from './OrganizationModel';
import { IthirdyParthy } from './ThirdyParthyModel';
import { IAccountingSource } from './AccountingSourceModel';
import { IAccountingVoucherRecord } from './AccountingVoucherRecordModel';

export interface IAccountingVoucher {
  id?: number;
  orgId?: string;
  organization?: IOrganization;
  date?: Date;
  sourceId?: number;
  accountingSource?: IAccountingSource;
  consecutive?: number;
  description?: string;
  accountIds?: number[];
  accounts?: IAccount[];
  accountingVouchers?: IAccountingVoucherRecord[];
  accountingVoucher?: IAccountingVoucherRecord;
  thirdyIds?: string[];
  thirdyPathies?: IthirdyParthy[];
  debit?: number;
  credit?: number;
}
