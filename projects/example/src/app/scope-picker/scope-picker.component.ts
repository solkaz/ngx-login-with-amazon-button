import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Scope {
  title: string;
  scope: AuthorizationScopeOptions;
}

@Component({
  selector: 'app-scope-picker',
  templateUrl: './scope-picker.component.html',
  styleUrls: ['./scope-picker.component.css'],
})
export class ScopePickerComponent {
  @Input() options: AuthorizeOptions;
  @Output() optionChange = new EventEmitter<AuthorizeOptions>();

  readonly scopes: Scope[] = [
    { title: 'Profile', scope: 'profile' },
    { title: 'User ID', scope: 'profile:user_id' },
    { title: 'Postal Code', scope: 'postal_code' },
  ];

  isScopeRequested = (scope: AuthorizationScopeOptions) => {
    return this.options.scope.includes(scope);
  }

  get scopeData() {
    return this.options.scope_data;
  }

  onScopeChange = (
    scope: AuthorizationScopeOptions,
    isScopeRequested: boolean
  ) => {
    const previousScope = this.options.scope as AuthorizationScopeOptions[];
    this.optionChange.emit({
      ...this.options,
      scope: isScopeRequested
        ? previousScope.concat(scope)
        : previousScope.filter((x) => x !== scope),
      scope_data: {
        ...this.scopeData,
        [scope]: isScopeRequested ? { essential: false } : undefined,
      },
    });
  }

  isScopeRequired = (scope: AuthorizationScopeOptions) => {
    return Boolean(
      this.isScopeRequested(scope) && this.scopeData[scope].essential
    );
  }

  onScopeRequiredChange = (
    scope: AuthorizationScopeOptions,
    essential: boolean
  ) => {
    this.optionChange.emit({
      ...this.options,
      scope_data: {
        ...this.scopeData,
        [scope]: { essential },
      },
    });
  }
}
