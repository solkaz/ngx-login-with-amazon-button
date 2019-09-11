import { InjectionToken } from '@angular/core';

type LwaSdk = typeof amazon.Login;

const LWA_SDK_OBJECT = new InjectionToken<LwaSdk>('lwa.sdk.object');
const LWA_CLIENT_ID = new InjectionToken<string>('lwa.client.id');

export { LWA_CLIENT_ID, LWA_SDK_OBJECT };
