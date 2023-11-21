import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { IItem } from 'src/models/ItemModel';
import { Catalog } from './CatalogEntity';
import { Account } from './AccountEnttity';
import { Organization } from './OrganizationEntity';
import { ItemAccount } from './ItemAccountEntity';

@Table
export class Item extends Model<IItem> implements IItem {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  name: string;
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  typeItemId: number;

  @BelongsTo(() => Catalog, 'typeItemId')
  typeItem: Catalog;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  unitMeasureId: number;

  @BelongsTo(() => Catalog, 'unitMeasureId')
  unitMeasure: Catalog;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  taxId: number;

  @BelongsTo(() => Catalog, 'taxId')
  tax: Catalog;

  @Column({
    type: DataType.FLOAT,
  })
  price: number;

  @Column({
    type: DataType.FLOAT,
  })
  unitCost: number;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  code: string;

  @BelongsToMany(() => Account, () => ItemAccount)
  accountsConfig: Account[];

  @ForeignKey(() => Organization)
  @Column({
    type: DataType.STRING,
  })
  orgId?: string;
}
