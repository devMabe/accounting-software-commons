import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { IOrganization } from 'src/models/OrganizationModel';
import { Catalog } from './CatalogEntity';

@Table
export class Organization
  extends Model<IOrganization>
  implements IOrganization
{
  @Column({
    primaryKey: true,
    type: DataType.STRING,
  })
  identificationNumber?: string;

  @Column({
    type: DataType.STRING,
  })
  logo?: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  address?: string;

  @Column({
    type: DataType.STRING,
  })
  email?: string;

  @Column({
    type: DataType.STRING,
  })
  economicActivity?: string;

  @Column({
    type: DataType.STRING,
  })
  phone?: string;

  @Column({
    type: DataType.STRING,
  })
  webSite?: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: 0,
  })
  facturation?: number;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  identificationTypeId?: number;

  @BelongsTo(() => Catalog, 'identificationTypeId')
  identificationType: Catalog;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  orgTypeId: number;

  @BelongsTo(() => Catalog, 'orgTypeId')
  orgType: Catalog;

  @Column({
    type: DataType.JSON,
  })
  taxResponsabilities: Catalog[];

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  idNumberOfEmployees: number;

  @BelongsTo(() => Catalog, 'idNumberOfEmployees')
  numberOfEmployees: Catalog;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  moneyId: number;

  @BelongsTo(() => Catalog, 'moneyId')
  money: Catalog;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  idSector: number;

  @BelongsTo(() => Catalog, 'idSector')
  sector: Catalog;

  // @BelongsToMany(() => ThirdyParthy, () => ThirdyOrg)
  // thirdyParties: ThirdyParthy[]
}
