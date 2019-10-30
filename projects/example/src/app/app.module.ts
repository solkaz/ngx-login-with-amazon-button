import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgxLoginWithAmazonButtonModule,
  LWA_CLIENT_ID,
} from 'ngx-login-with-amazon-button';
import { AppComponent } from './app.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { ScopePickerComponent } from './scope-picker/scope-picker.component';
import { ScopePickerFieldComponent } from './scope-picker-field/scope-picker-field.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    NgxLoginWithAmazonButtonModule.forRoot(environment.clientId),
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    ProfileDisplayComponent,
    ScopePickerComponent,
    ScopePickerFieldComponent,
  ],
  /**
   * For now, we need to provide `LWA_CLIENT_ID` due to issue with
   * AOT compilation and environment logic.
   * Issue: https://github.com/angular/angular/issues/22829
   */
  providers: [{ provide: LWA_CLIENT_ID, useValue: environment.clientId }],
  bootstrap: [AppComponent],
})
export class AppModule {}
