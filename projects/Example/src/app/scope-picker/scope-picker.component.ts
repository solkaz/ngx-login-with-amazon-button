import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-scope-picker',
  templateUrl: './scope-picker.component.html',
  styleUrls: ['./scope-picker.component.css'],
})
export class ScopePickerComponent {
  @Input() options: AuthorizeOptions;
  @Output() optionChange = new EventEmitter<AuthorizeOptions>();

  isScopeRequested = (scope: AuthorizationScopeOptions) => {
    return this.options.scope.includes(scope);
  }

  onScopeChange = (
    scope: AuthorizationScopeOptions,
    isScopeRequested: boolean
  ) => {
    const previousScope = this.options.scope as Array<
      AuthorizationScopeOptions
    >;
    this.optionChange.emit({
      ...this.options,
      scope: isScopeRequested
        ? previousScope.concat(scope)
        : previousScope.filter((x) => x !== scope),
      scope_data: {
        ...(this.options as any).scope_data,
        [scope]: isScopeRequested ? { essential: false } : undefined,
      },
    } as any);
  }

  isScopeRequirementChecked = (scope: AuthorizationScopeOptions) => {
    return Boolean(
      this.isScopeRequested(scope) &&
        (this.options as any).scope_data[scope].essential
    );
  }

  onScopeRequirementChange = (
    scope: AuthorizationScopeOptions,
    essential: boolean
  ) => {
    this.optionChange.emit({
      ...this.options,
      scope_data: {
        ...(this.options as any).scope_data,
        [scope]: { essential },
      },
    } as any);
  }
}
