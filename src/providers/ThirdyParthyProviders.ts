import { ThirdyParthy } from 'src/entities/ThirdyParthyEntity';
import { THIRDY_PARTHY_REPOSITORY } from './config';

export const ThirdyParthyProviders = [
  {
    provide: THIRDY_PARTHY_REPOSITORY,
    useValue: ThirdyParthy,
  },
];
