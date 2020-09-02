import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSlotBookingComponent } from './add-edit-slot-booking.component';

describe('AddEditSlotBookingComponent', () => {
  let component: AddEditSlotBookingComponent;
  let fixture: ComponentFixture<AddEditSlotBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSlotBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSlotBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
