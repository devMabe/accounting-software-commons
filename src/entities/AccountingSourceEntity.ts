import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IAccountingSource } from 'src/models/AccountingSourceModel';

@Table
export class AccountingSource
  extends Model<IAccountingSource>
  implements IAccountingSource
{
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id?: number;

  @Column({
    type: DataType.INTEGER,
  })
  source?: number;

  @Column({
    type: DataType.STRING,
  })
  name?: string;

  @Column({
    type: DataType.INTEGER,
  })
  typeOfConsecutive?: number;

  @Column({
    type: DataType.INTEGER,
  })
  currentConsecutive?: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  status?: boolean;
}
