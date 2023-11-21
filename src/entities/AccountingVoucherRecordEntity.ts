import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { IAccountingVoucherRecord } from 'src/models/AccountingVoucherRecordModel';
import { AccountingVoucher } from './AccountingVoucherEntity';
import { Account } from './AccountEnttity';
import { ThirdyParthy } from './ThirdyParthyEntity';
import { Catalog } from './CatalogEntity';

@Table
export class AccountingVoucherRecord
  extends Model<IAccountingVoucherRecord>
  implements IAccountingVoucherRecord
{
  @ForeignKey(() => AccountingVoucher)
  accountingVoucherId?: number;

  @BelongsTo(() => AccountingVoucher, 'accountingVoucherId')
  accountingVoucher: AccountingVoucher;

  @ForeignKey(() => Account)
  accountId?: number;

  @BelongsTo(() => Account, 'accountId')
  account?: Account;

  @ForeignKey(() => ThirdyParthy)
  thirdyId?: string;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  movementId?: number;

  @BelongsTo(() => Catalog, 'movementId')
  movement?: Catalog;

  @BelongsTo(() => ThirdyParthy, 'thirdyId')
  thirdyParthy?: ThirdyParthy;

  @Column({
    type: DataType.FLOAT,
  })
  debit?: number;

  @Column({
    type: DataType.FLOAT,
  })
  credit?: number;
}
