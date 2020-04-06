import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressUIComponent } from './add-address-ui.component';

describe('AddAddressUIComponent', () => {
  let component: AddAddressUIComponent;
  let fixture: ComponentFixture<AddAddressUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddressUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddressUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
