import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopePickerFieldComponent } from './scope-picker-field.component';

describe('ScopePickerFieldComponent', () => {
  let component: ScopePickerFieldComponent;
  let fixture: ComponentFixture<ScopePickerFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopePickerFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopePickerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
