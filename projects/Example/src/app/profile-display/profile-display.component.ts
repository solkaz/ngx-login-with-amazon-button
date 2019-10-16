import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css'],
})
export class ProfileDisplayComponent {
  @Input() profile?: UserProfile;
  @Output() logout = new EventEmitter<void>();
}
