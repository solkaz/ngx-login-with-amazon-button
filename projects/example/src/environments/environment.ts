import { values } from './values';
import { EnvironmentType } from './environment-type';

export const environment: EnvironmentType = {
  production: false,
  ...values,
};
