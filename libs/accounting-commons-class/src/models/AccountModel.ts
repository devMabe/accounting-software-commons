import { ICatalog } from './CatalogModel';
import { IItem } from './ItemModel';
import { IOrganization } from './OrganizationModel';

export interface IAccount {
  id?: number;
  code?: string;
  name?: string;
  classificationId?: number;
  classification?: ICatalog;
  dependent?: string;
  orgId?: string;
  organization?: IOrganization;
  classTypeId?: number;
  classType?: ICatalog;
  dynamics?: ICatalog;
  dynamicsId?: number;
  status?: boolean;
  items?: IItem[];
}
