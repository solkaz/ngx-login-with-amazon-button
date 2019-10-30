import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgxLoginWithAmazonButtonModule,
  LWA_CLIENT_ID,
} from 'ngx-login-with-amazon-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { ScopePickerComponent } from './scope-picker/scope-picker.component';
import { ScopePickerFieldComponent } from './scope-picker-field/scope-picker-field.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxLoginWithAmazonButtonModule.forRoot(environment.clientId),
  ],
  declarations: [
    AppComponent,
    ProfileDisplayComponent,
    ScopePickerComponent,
    ScopePickerFieldComponent,
    HeaderComponent,
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
