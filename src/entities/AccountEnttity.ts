import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { IAccount } from 'src/models/AccountModel';
import { ICatalog } from 'src/models/CatalogModel';
import { Catalog } from './CatalogEntity';
import { Organization } from './OrganizationEntity';
import { ItemAccount } from './ItemAccountEntity';
import { Item } from './ItemEntity';
import { ThirdyParthy } from './ThirdyParthyEntity';
import { AccountingVoucherRecord } from './AccountingVoucherRecordEntity';
import { AccountingVoucher } from './AccountingVoucherEntity';

@Table
export class Account extends Model<IAccount> implements IAccount {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @Column({
    type: DataType.STRING,
  })
  code: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ForeignKey(() => Organization)
  orgId: string;

  @BelongsTo(() => Organization, 'orgId')
  organization?: Organization;

  @ForeignKey(() => Catalog)
  classificationId: number;

  @BelongsTo(() => Catalog, 'classificationId')
  classification?: ICatalog;

  @Column({
    type: DataType.STRING,
  })
  dependent: string;

  @ForeignKey(() => Catalog)
  classTypeId?: number;

  @BelongsTo(() => Catalog, 'classTypeId')
  classType: ICatalog;

  @ForeignKey(() => Catalog)
  dynamicsId?: number;

  @BelongsTo(() => Catalog, 'dynamicsId')
  dynamics?: ICatalog;

  @Column({
    type: DataType.BOOLEAN,
  })
  status: boolean;

  @BelongsToMany(() => Item, () => ItemAccount)
  items?: Item[];

  @BelongsToMany(() => ThirdyParthy, () => AccountingVoucherRecord)
  thirdyParties?: ThirdyParthy[];

  @BelongsToMany(() => AccountingVoucher, () => AccountingVoucherRecord)
  vouchers?: AccountingVoucher[];
}
