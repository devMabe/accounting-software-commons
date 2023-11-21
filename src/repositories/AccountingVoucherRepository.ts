import { IAccountingVoucher } from 'src/models/AccountingVoucherModel';

export abstract class AccountingVoucherRepository {
  getAll: (
    orgId: string,
    filters?: { sourceId?: number },
  ) => Promise<IAccountingVoucher[]>;
  getById: (id: number) => Promise<IAccountingVoucher>;
  create: (args: IAccountingVoucher) => Promise<IAccountingVoucher>;
  update: (args: IAccountingVoucher) => Promise<IAccountingVoucher>;
}
