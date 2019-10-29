import { InjectionToken } from '@angular/core';
import { LwaSdkNamespaceType } from './types';

/**
 * `InjectionToken` for the Login with Amazon SDK object.
 */
const LWA_SDK_OBJECT = new InjectionToken<LwaSdkNamespaceType>(
  'lwa.sdk.object',
  {
    factory: () => amazon.Login,
    providedIn: 'root',
  }
);

/**
 * `InjectionToken` for the clientId.
 */
const LWA_CLIENT_ID = new InjectionToken<string>('lwa.client.id');

export { LWA_CLIENT_ID, LWA_SDK_OBJECT };
