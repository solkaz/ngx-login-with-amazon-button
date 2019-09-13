import { InjectionToken } from '@angular/core';

const LWA_SDK_OBJECT = new InjectionToken<typeof amazon.Login>(
  'lwa.sdk.object'
);
const LWA_CLIENT_ID = new InjectionToken<string>('lwa.client.id');

export { LWA_CLIENT_ID, LWA_SDK_OBJECT };
