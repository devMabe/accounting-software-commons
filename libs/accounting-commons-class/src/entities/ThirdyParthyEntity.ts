import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { IthirdyParthy } from 'src/models/ThirdyParthyModel';
import { Catalog } from './CatalogEntity';
import { ThirdyOrg } from './ThirdyParthyOrgEntity';
import { Organization } from './OrganizationEntity';
import { AccountingVoucherRecord } from './AccountingVoucherRecordEntity';
import { Account } from './AccountEnttity';
import { AccountingVoucher } from './AccountingVoucherEntity';

@Table
export class ThirdyParthy
  extends Model<IthirdyParthy>
  implements IthirdyParthy
{
  @Column({
    primaryKey: true,
    type: DataType.STRING,
  })
  identificationNumber: string;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  typeIdentificationId: number;

  @HasOne(() => ThirdyOrg)
  thirdyOrg: ThirdyOrg;

  @BelongsTo(() => Catalog, 'typeIdentificationId')
  typeIdentification?: Catalog;

  @BelongsToMany(() => Organization, () => ThirdyOrg)
  organizations: Organization[];

  @BelongsToMany(() => Account, () => AccountingVoucherRecord)
  accounts?: Account[];

  @BelongsToMany(() => AccountingVoucher, () => AccountingVoucherRecord)
  vouchers?: AccountingVoucher[];
}
