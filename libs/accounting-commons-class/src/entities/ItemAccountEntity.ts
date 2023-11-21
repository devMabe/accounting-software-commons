import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Item } from './ItemEntity';
import { IItemAccount } from 'src/models/ItemAccountModel';
import { Account } from './AccountEnttity';

@Table
export class ItemAccount extends Model<IItemAccount> implements IItemAccount {
  @ForeignKey(() => Item)
  @Column({
    type: DataType.INTEGER,
  })
  itemId: number;

  @BelongsTo(() => Item, 'itemId')
  item: Item;

  @ForeignKey(() => Account)
  @Column({
    type: DataType.INTEGER,
  })
  accountId: number;

  @BelongsTo(() => Account, 'accountId')
  account: Account;
}
