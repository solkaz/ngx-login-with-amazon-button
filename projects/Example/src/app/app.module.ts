import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  LWA_CLIENT_ID,
  LWA_SDK_OBJECT,
  NgxLoginWithAmazonButtonModule,
} from 'ngx-login-with-amazon-button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxLoginWithAmazonButtonModule],
  providers: [
    {
      provide: LWA_SDK_OBJECT,
      useValue: {
        authorize(options, next) {
          console.log('authorizing');
          console.log('options:', options);
          if (typeof next !== 'string') {
            next();
          } else {
            console.log('routing to', next);
          }
        },
        setClientId(id: string) {
          console.log('set client id!', id);
        },
      },
    },
    {
      provide: LWA_CLIENT_ID,
      useValue: 'testing',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
