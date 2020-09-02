import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeskBookingComponent } from './add-edit-desk-booking.component';

describe('AddEditDeskBookingComponent', () => {
  let component: AddEditDeskBookingComponent;
  let fixture: ComponentFixture<AddEditDeskBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDeskBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeskBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
