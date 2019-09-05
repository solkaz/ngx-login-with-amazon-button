import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoginWithAmazonButtonComponent } from './ngx-login-with-amazon-button.component';

describe('NgxLoginWithAmazonButtonComponent', () => {
  let component: NgxLoginWithAmazonButtonComponent;
  let fixture: ComponentFixture<NgxLoginWithAmazonButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLoginWithAmazonButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoginWithAmazonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
