import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/**
 * Launches the application. Because this application is
 * dependent on the Login with Amazon SDK being present, it
 * will be bootstrapped only after the SDK is loaded.
 */
function bootstrapApp() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

/**
 * If the SDK has loaded before the app bundle has loaded, then
 * `bootstrapApp` will not be called automatically; if so, then
 * `bootstrapApp` can safely be called manually.
 *
 * To check if the SDK was loaded, check if the <script /> tag is present.
 * It has an `id` of `amazon-login-sdk`, which will cause a reference to
 * the element to be added as to the global scope.
 *
 * See [2ality's post about IDs being global](https://2ality.com/2012/08/ids-are-global.html)
 */
if (globalThis['amazon-login-sdk'] && globalThis.amazon) {
  bootstrapApp();
} else {
  /**
   * `onAmazonLoginReady` is to be called when the Login with Amazon SDK
   * has been loaded.
   */
  globalThis.onAmazonLoginReady = bootstrapApp;
}
