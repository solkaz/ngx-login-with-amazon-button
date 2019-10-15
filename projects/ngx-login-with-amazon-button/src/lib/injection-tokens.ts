import { InjectionToken } from '@angular/core';
import { LwaSdkNamespaceType } from './types';

const LWA_SDK_OBJECT = new InjectionToken<LwaSdkNamespaceType>(
  'lwa.sdk.object',
  {
    factory: () => amazon.Login,
    providedIn: 'root',
  }
);
const LWA_CLIENT_ID = new InjectionToken<string>('lwa.client.id');

export { LWA_CLIENT_ID, LWA_SDK_OBJECT };
