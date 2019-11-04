/**
 * The shape of the Login with Amazon SDK,
 * which is located at the `amazon.Login` namespace.
 * Because it is a namespace, the SDK cannot be extended.
 */
export type LwaSdkNamespaceType = typeof amazon.Login;

/**
 * Abstract class that mimics the Login with Amazon SDK. Needed for AOT.
 * Setting the type of `lwaSdk` parameter in the service's constructor
 * would result in an error when compiling with `ngc`.
 * Relevant issue: https://github.com/angular/angular/issues/12631
 * @ignore
 */
export abstract class AbstractLwaSdk implements LwaSdkNamespaceType {
  abstract Region: typeof amazon.Login.Region;
  abstract setClientId(clientId: string);
  abstract getClientId(): string;
  abstract authorize(
    options: AccessTokenAuthorizeOptions,
    next?: string | NextCallback<AccessTokenRequest>
  ): AccessTokenRequest;
  abstract authorize(
    options: CodeAuthorizeOptions,
    next?: string | NextCallback<CodeRequest>
  ): CodeRequest;
  abstract authorize(
    options: AuthorizeOptions,
    next?: string | NextCallback<AuthorizeRequest>
  ): AuthorizeRequest;
  abstract setSandboxMode(sandboxMode: boolean): void;
  abstract setSiteDomain(siteDomain: string): void;
  abstract setUseCookie(useCookie: boolean): void;
  abstract retrieveProfile(callback: RetrieveProfileCallback): void;
  abstract retrieveProfile(
    accessToken: string,
    callback?: RetrieveProfileCallback
  ): void;
  abstract logout(): void;
  abstract setRegion(region: amazon.Login.Region): void;
}
