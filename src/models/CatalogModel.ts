export interface ICatalog {
  id?: number;
  name: string;
  catalogId?: number;
  code?: string;
  /**
   * The above fields only to present data besides of consumers
   */
  subCatalog?: ICatalog[];
}
