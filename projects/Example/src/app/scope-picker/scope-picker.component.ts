import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-scope-picker',
  templateUrl: './scope-picker.component.html',
  styleUrls: ['./scope-picker.component.css'],
})
export class ScopePickerComponent {
  @Input() options: AuthorizeOptions;
  @Output() optionChange = new EventEmitter<AuthorizeOptions>();

  isValueChecked = (scope: AuthorizationScopeOptions) => {
    return this.options.scope.includes(scope);
  }

  onScopeChange = (scope: AuthorizationScopeOptions) => {
    const previousScope = this.options.scope as Array<
      AuthorizationScopeOptions
    >;
    const wasValueChecked = this.isValueChecked(scope);
    this.optionChange.emit({
      ...this.options,
      scope: wasValueChecked
        ? previousScope.filter((x) => x !== scope)
        : previousScope.concat(scope),
      scope_data: {
        ...(this.options as any).scope_data,
        [scope]: wasValueChecked ? undefined : { essential: false },
      },
    } as any);
  }

  isEssentialValueChecked = (scope: AuthorizationScopeOptions) => {
    return Boolean((this.options as any).scope_data[scope].essential);
  }

  onScopeRequirementChange = (scope: AuthorizationScopeOptions) => {
    this.optionChange.emit({
      ...this.options,
      scope_data: {
        ...(this.options as any).scope_data,
        [scope]: {
          essential: !this.isEssentialValueChecked(scope),
        },
      },
    } as any);
  }
}
