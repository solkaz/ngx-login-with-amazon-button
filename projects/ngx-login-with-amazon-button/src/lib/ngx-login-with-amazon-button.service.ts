import { Inject, Injectable } from '@angular/core';
import { LWA_CLIENT_ID, LWA_SDK_OBJECT } from './injection-tokens';
import { AbstractLwaSdk } from './types';

/**
 * Abstracts the Login With Amazon SDK (located at `amazon.Login` globally).
 * When the service is constructed, it will attempt to set the client ID
 * with the SDK (basically calling `amazon.Login.setClientId('CLIENT_ID')`);
 * therefore, ensure that the `LWA_CLIENT_ID` token is provided.
 * If you import the `NgxLoginWithAmazonButtonModule` using its `forRoot`
 * method, you do not need to manually provide the token itself.
 * The Login with Amazon SDK object can be accessed through the
 * public `sdk` member.
 */
@Injectable({
  providedIn: 'root',
})
export class NgxLoginWithAmazonButtonService {
  constructor(
    /**
     * Reference to the Login with Amazon SDK.
     */
    @Inject(LWA_SDK_OBJECT) public sdk: AbstractLwaSdk,
    @Inject(LWA_CLIENT_ID) private clientId: string
  ) {
    if (!this.clientId) {
      throw new Error('Missing clientId');
    }

    this.sdk.setClientId(this.clientId);
  }
}
