import { ModuleWithProviders, NgModule } from '@angular/core';
import { LWA_CLIENT_ID } from './injection-tokens';
import { NgxLoginWithAmazonButtonComponent } from './ngx-login-with-amazon-button.component';

/**
 * Declares and exports the Button component and handles providing the client ID.
 * To use this module, please include it in your `imports` array while calling the `forRoot` method.
 */
@NgModule({
  declarations: [NgxLoginWithAmazonButtonComponent],
  imports: [],
  exports: [NgxLoginWithAmazonButtonComponent],
})
export class NgxLoginWithAmazonButtonModule {
  /**
   * Call this method when importing the `NgxLoginWithAmazonButtonModule`.
   * This function requires a client ID for your Login with Amazon application.
   */
  static forRoot(clientId: string): ModuleWithProviders {
    return {
      ngModule: NgxLoginWithAmazonButtonModule,
      providers: [{ provide: LWA_CLIENT_ID, useValue: clientId }],
    };
  }
}
