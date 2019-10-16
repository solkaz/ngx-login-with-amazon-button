import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoginWithAmazonButtonModule } from 'ngx-login-with-amazon-button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxLoginWithAmazonButtonModule.forRoot(
      'amzn1.application-oa2-client.5241d59b9958451caa24b09208b43d3e'
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
