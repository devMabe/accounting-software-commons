import { IAccount } from './AccountModel';
import { ICatalog } from './CatalogModel';
import { IOrganization } from './OrganizationModel';

export interface IItem {
  id?: number;
  typeItem?: ICatalog;
  typeItemId?: number;
  name?: string;
  unitMeasure?: ICatalog;
  unitMeasureId?: number;
  category?: any;
  categoryId?: number;
  priceList?: any[];
  priceListIds?: number[];
  wareHouse?: any;
  wareHouseId?: string;
  price?: number;
  unitCost?: number;
  tax?: ICatalog;
  taxId?: number;
  image?: string;
  accountsConfig?: IAccount[];
  accountConfigIds?: number[];
  inventoryAdjusments?: any[];
  stock?: any;
  code?: string;
  orgId?: string;
  organization?: IOrganization;
}
