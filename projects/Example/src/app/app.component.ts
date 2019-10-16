import { Component } from '@angular/core';
import { NgxLoginWithAmazonButtonService } from 'ngx-login-with-amazon-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profile?: UserProfile;
  constructor(private lwaSdk: NgxLoginWithAmazonButtonService) {}
  onAuthorize = (response: AccessTokenRequest) => {
    this.lwaSdk.lwaSdk.retrieveProfile(response.access_token, (res) => {
      if (res.success === false) {
        throw new Error('Couldn\'t retrieve profile: ' + res.error);
      }
      this.profile = res.profile;
    });
  }

  logout = () => {
    this.lwaSdk.lwaSdk.logout();
    this.profile = undefined;
  }
}
