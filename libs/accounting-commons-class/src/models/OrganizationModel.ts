import { ICatalog } from './CatalogModel';

export interface IOrganization {
  logo?: string;
  identificationType?: ICatalog;
  identificationTypeId?: number;
  identificationNumber?: string;
  economicActivity?: string;
  orgType?: ICatalog;
  orgTypeId?: number;
  name?: string;
  taxResponsabilities?: ICatalog[];
  address?: string;
  email?: string;
  phone?: string;
  webSite?: string;
  facturation?: number;
  numberOfEmployees?: ICatalog;
  numberOfEmployeesId?: number;
  money?: ICatalog;
  moneyId?: number;
  sector?: ICatalog;
  idSector?: number;
  wareHouses?: any[];
}
