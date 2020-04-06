import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddressUIComponent } from './list-address-ui.component';

describe('ListAddressUIComponent', () => {
  let component: ListAddressUIComponent;
  let fixture: ComponentFixture<ListAddressUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAddressUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddressUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
