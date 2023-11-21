import { ThirdyOrg } from 'src/entities/ThirdyParthyOrgEntity';
import { THIRDY_ORG_REPOSITORY } from './config';

export const ThirdyOrgProviders = [
  {
    provide: THIRDY_ORG_REPOSITORY,
    useValue: ThirdyOrg,
  },
];
