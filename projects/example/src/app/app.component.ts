import { Component } from '@angular/core';
import { NgxLoginWithAmazonButtonService } from 'ngx-login-with-amazon-button';

const defaultOptions: AuthorizeOptions = {
  scope: ['profile', 'profile:user_id', 'postal_code'],
  scope_data: {
    postal_code: { essential: false },
    profile: { essential: false },
    'profile:user_id': { essential: false },
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profile?: UserProfile;
  region: amazon.Login.Region = amazon.Login.Region.NorthAmerica;
  options: AuthorizeOptions = defaultOptions;

  constructor(private lwa: NgxLoginWithAmazonButtonService) {}

  onAuthorize = (response: AccessTokenRequest) => {
    // TODO Validate access token
    this.lwa.sdk.retrieveProfile(response.access_token, (res) => {
      if (res.success === false) {
        throw new Error(`Couldn\'t retrieve profile: ${res.error}`);
      }
      this.profile = res.profile;
    });
  }

  handleRegionChange = (region: amazon.Login.Region) => {
    this.lwa.sdk.setRegion(region);
    this.region = region;
  }

  logout = () => {
    this.lwa.sdk.logout();
    this.profile = undefined;
    this.options = defaultOptions;
  }
}
