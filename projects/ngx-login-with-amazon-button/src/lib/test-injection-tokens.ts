import { Provider } from '@angular/core';
import { LWA_CLIENT_ID, LWA_SDK_OBJECT } from './injection-tokens';
import { LwaSdkNamespaceType } from './types';

const sdkMock = jasmine.createSpyObj<LwaSdkNamespaceType>('sdk', [
  'authorize',
  'setClientId',
]);

(sdkMock.authorize as jasmine.Spy).and.callFake(
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
    useValue: sdkMock,
  },
];

export { sdkMock, mockLwaSdkProviders };
