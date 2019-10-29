import { Inject, Injectable } from '@angular/core';
import { LWA_CLIENT_ID, LWA_SDK_OBJECT } from './injection-tokens';
import { AbstractLwaSdk } from './types';

/**
 * Abstracts the Login With Amazon SDK (located at `amazon.Login` globally).
 * The SDK object can be accessed through the `sdk` member.
 */
@Injectable({
  providedIn: 'root',
})
export class NgxLoginWithAmazonButtonService {
  constructor(
    @Inject(LWA_SDK_OBJECT) public sdk: AbstractLwaSdk,
    @Inject(LWA_CLIENT_ID) private clientId: string
  ) {
    if (!this.clientId) {
      throw new Error('Missing clientId');
    }

    this.sdk.setClientId(this.clientId);
  }
}
