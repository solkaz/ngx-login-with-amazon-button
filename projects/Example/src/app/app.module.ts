import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoginWithAmazonButtonModule } from 'ngx-login-with-amazon-button';
import { AppComponent } from './app.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { ScopePickerComponent } from './scope-picker/scope-picker.component';
import { ScopePickerFieldComponent } from './scope-picker-field/scope-picker-field.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDisplayComponent,
    ScopePickerComponent,
    ScopePickerFieldComponent,
  ],
  imports: [
    BrowserModule,
    NgxLoginWithAmazonButtonModule.forRoot(environment.clientId),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
