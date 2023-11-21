import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { ICatalog } from 'src/models/CatalogModel';

@Table
export class Catalog extends Model<ICatalog> implements ICatalog {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  code: string;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  catalogId: number;

  @HasMany(() => Catalog)
  subCatalog: Catalog[];
}
