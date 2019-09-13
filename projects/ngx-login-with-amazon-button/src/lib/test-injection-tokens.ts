import { LWA_CLIENT_ID, LWA_SDK_OBJECT } from './injection-tokens';
import { Provider } from '@angular/core';

type LwaSdk = typeof amazon.Login;

export const lwaSdkMock: LwaSdk = jasmine.createSpyObj<LwaSdk>('lwaSdk', [
  'authorize',
  'setClientId',
]);

export const mockLwaSdkProviders: Provider[] = [
  {
    provide: LWA_CLIENT_ID,
    useValue: 'myClientId',
  },
  {
    provide: LWA_SDK_OBJECT,
    useValue: lwaSdkMock,
  },
];
