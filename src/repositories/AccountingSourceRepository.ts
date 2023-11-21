import { IAccountingSource } from 'src/models/AccountingSourceModel';

export abstract class AccountingSourceRepository {
  getAll: () => Promise<IAccountingSource[]>;
  getBySource: (sourceId: number) => Promise<IAccountingSource>;
  update: (args: IAccountingSource) => Promise<IAccountingSource>;
}
