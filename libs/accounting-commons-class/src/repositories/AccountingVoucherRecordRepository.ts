import { IAccountingVoucherRecord } from 'src/models/AccountingVoucherRecordModel';

export abstract class AccountingVoucherRecordRepository {
  getAll: (accountingVoucherId: number) => Promise<IAccountingVoucherRecord[]>;
  create: (args: IAccountingVoucherRecord) => Promise<IAccountingVoucherRecord>;
  update: (args: IAccountingVoucherRecord) => Promise<IAccountingVoucherRecord>;
}
