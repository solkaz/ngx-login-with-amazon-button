import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-scope-picker-field',
  templateUrl: './scope-picker-field.component.html',
  styleUrls: ['./scope-picker-field.component.css'],
})
export class ScopePickerFieldComponent {
  @Input() title: string;
  @Input() scope: AuthorizationScopeOptions;
  @Input() scopeEnabled: boolean;
  @Input() isRequired: boolean;
  @Output() scopeChange = new EventEmitter<boolean>();
  @Output() scopeRequirementChange = new EventEmitter<boolean>();
}
