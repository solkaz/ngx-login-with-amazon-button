import { Provider } from '@angular/core';
import { LWA_CLIENT_ID, LWA_SDK_OBJECT } from './injection-tokens';
import { LwaSdkNamespaceType } from './types';

const lwaSdkMock = jasmine.createSpyObj<LwaSdkNamespaceType>('lwaSdk', [
  'authorize',
  'setClientId',
]);

(lwaSdkMock.authorize as jasmine.Spy).and.callFake(
  (options: any, next: NextCallback<any>) => {
    if (typeof next === 'string') {
      return;
    }
    next(options);
  }
);

const mockLwaSdkProviders: Provider[] = [
  {
    provide: LWA_CLIENT_ID,
    useValue: 'myClientId',
  },
  {
    provide: LWA_SDK_OBJECT,
    useValue: lwaSdkMock,
  },
];

export { lwaSdkMock, mockLwaSdkProviders };
