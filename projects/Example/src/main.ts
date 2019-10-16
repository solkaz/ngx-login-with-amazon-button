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

globalThis.onAmazonLoginReady = bootstrapApp;
