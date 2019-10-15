import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxLoginWithAmazonButtonComponent } from './ngx-login-with-amazon-button.component';
import { NgxLoginWithAmazonButtonService } from './ngx-login-with-amazon-button.service';
import { LWA_CLIENT_ID } from './injection-tokens';

@NgModule({
  declarations: [NgxLoginWithAmazonButtonComponent],
  imports: [],
  exports: [NgxLoginWithAmazonButtonComponent],
})
export class NgxLoginWithAmazonButtonModule {
  static forRoot(clientId: string): ModuleWithProviders {
    if (!clientId) {
      throw new Error('clientId was not provided');
    }

    return {
      ngModule: NgxLoginWithAmazonButtonModule,
      providers: [
        { provide: LWA_CLIENT_ID, useValue: clientId },
        NgxLoginWithAmazonButtonService,
      ],
    };
  }
}
