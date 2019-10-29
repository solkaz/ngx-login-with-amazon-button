# `NgxLoginWithAmazonButtonModule`

## Usage

In order to use the `NgxLoginWithAmazonButtonModule`, call the static `forRoot` method in your `AppModule` `imports` array. The `forRoot` method takes a string as its argument, which is the client ID for your application (obtained from the Amazon Developer Console; please follow [their documentation](https://developer.amazon.com/docs/login-with-amazon/register-web.html) if you need one).

## Example

```typescript
import { NgModule } from "@angular/core";
import { NgxLoginWithAmazonButtonModule } from "ngx-login-with-amazon-button";

@NgModule({
  // ...
  imports: [NgxLoginWithAmazonButtonModule.forRoot("YOUR_CLIENT_ID")],
  // ...
})
export class AppModule {}
```
