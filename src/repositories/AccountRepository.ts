import { IAccount } from 'src/models/AccountModel';

export abstract class AccountRepository {
  create: (data: IAccount) => Promise<IAccount>;
  getAll: (filters: { orgId: string; status?: boolean }) => Promise<IAccount[]>;
  getOne: (filters: { id?: number; code?: string }) => Promise<IAccount>;
  update: (data: IAccount) => Promise<IAccount>;
  delete: (id: number) => Promise<boolean>;
}
