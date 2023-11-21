import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { IthirdyParthy } from 'src/models/ThirdyParthyModel';
import { Organization } from './OrganizationEntity';
import { ThirdyParthy } from './ThirdyParthyEntity';
import { Catalog } from './CatalogEntity';

@Table
export class ThirdyOrg extends Model<IthirdyParthy> implements IthirdyParthy {
  @ForeignKey(() => Organization)
  @Column({
    type: DataType.STRING,
  })
  orgId: string;

  @BelongsTo(() => Organization, 'orgId')
  organization: Organization;

  @ForeignKey(() => ThirdyParthy)
  @Column({
    type: DataType.STRING,
  })
  thirdyParthyId: string;

  @BelongsTo(() => ThirdyParthy, 'thirdyParthyId')
  thirdyParthy: ThirdyParthy;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
  })
  secondName: string;

  @Column({
    type: DataType.STRING,
  })
  secondLastname: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.JSON,
  })
  address: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  bussinesName: string;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  typeThirdyParthyId: number;

  @BelongsTo(() => Catalog, 'typeThirdyParthyId')
  typeThirdyParthy: Catalog;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  municipalityId: number;

  @BelongsTo(() => Catalog, 'municipalityId')
  municipality: Catalog;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  departamentId: number;

  @BelongsTo(() => Catalog, 'departamentId')
  departament: Catalog;

  @ForeignKey(() => Catalog)
  @Column({
    type: DataType.INTEGER,
  })
  personTypeId: number;

  @BelongsTo(() => Catalog, 'personTypeId')
  personType: Catalog;
}
