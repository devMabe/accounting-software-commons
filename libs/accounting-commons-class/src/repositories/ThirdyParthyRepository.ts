import { IthirdyParthy } from 'src/models/ThirdyParthyModel';

export abstract class ThirdyPartyRepository {
  getById: (id: string) => Promise<IthirdyParthy>;
}
