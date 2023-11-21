import { IItemAccount } from 'src/models/ItemAccountModel';

export abstract class ItemAccountRepository {
  getAllBy: (filters: {
    accountId?: number;
    itemId?: number;
  }) => Promise<IItemAccount[]>;
}
