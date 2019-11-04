import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-region-picker',
  templateUrl: './region-picker.component.html',
  styleUrls: ['./region-picker.component.css'],
})
export class RegionPickerComponent {
  readonly regions = [
    { region: amazon.Login.Region.NorthAmerica, title: 'North America' },
    { region: amazon.Login.Region.Europe, title: 'Europe' },
    { region: amazon.Login.Region.AsiaPacific, title: 'Asia/Pacific' },
  ];

  @Input() region: amazon.Login.Region = amazon.Login.Region.NorthAmerica;
  @Output() regionChange = new EventEmitter<amazon.Login.Region>();
}
