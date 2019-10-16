import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopePickerComponent } from './scope-picker.component';

describe('ScopePickerComponent', () => {
  let component: ScopePickerComponent;
  let fixture: ComponentFixture<ScopePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
