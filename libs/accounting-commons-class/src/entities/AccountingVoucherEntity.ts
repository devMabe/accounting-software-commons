import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { IAccountingVoucher } from 'src/models/AccountingVoucherModel';
import { Organization } from './OrganizationEntity';
import { AccountingSource } from './AccountingSourceEntity';
import { AccountingVoucherRecord } from './AccountingVoucherRecordEntity';
import { IAccountingVoucherRecord } from 'src/models/AccountingVoucherRecordModel';
import { Account } from './AccountEnttity';
import { ThirdyParthy } from './ThirdyParthyEntity';

@Table
export class AccountingVoucher
  extends Model<IAccountingVoucher>
  implements IAccountingVoucher
{
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Organization)
  orgId?: string;

  @BelongsTo(() => Organization, 'orgId')
  organization?: Organization;

  @Column({
    type: DataType.DATE,
  })
  date: Date;

  @ForeignKey(() => AccountingSource)
  sourceId?: number;

  @BelongsTo(() => AccountingSource, 'sourceId')
  accountingSource?: AccountingSource;

  @Column({
    type: DataType.INTEGER,
  })
  consecutive?: number;

  @Column({
    type: DataType.STRING,
  })
  description?: string;

  @Column({
    type: DataType.FLOAT,
  })
  debit?: number;

  @Column({
    type: DataType.FLOAT,
  })
  credit?: number;

  @HasMany(() => AccountingVoucherRecord)
  accountingVoucher?: IAccountingVoucherRecord;

  @BelongsToMany(() => Account, () => AccountingVoucherRecord)
  accounts?: Account[];

  @BelongsToMany(() => ThirdyParthy, () => AccountingVoucherRecord)
  thirdyPathies: ThirdyParthy[];
}
