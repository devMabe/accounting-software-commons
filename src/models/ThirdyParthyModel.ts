import { ICatalog } from './CatalogModel';

export interface IthirdyParthy {
  identificationNumber?: string;
  typeIdentificationId?: number;
  typeIdentification?: ICatalog;
  orgId?: string;
  thirdyParthyId?: string;
  name?: string;
  lastName?: string;
  secondName?: string;
  secondLastname?: string;
  email?: string;
  address?: string;
  phone?: string;
  bussinesName?: string;
  typeThirdyParthyId?: number;
  typeThirdyParthy?: ICatalog;
  departamentId?: number;
  departament?: ICatalog;
  municipalityId?: number;
  municipality?: ICatalog;
  personTypeId?: number;
  personType?: ICatalog;
}
