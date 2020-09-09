import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHireRequestComponent } from './edit-hire-request.component';

describe('EditHireRequestComponent', () => {
  let component: EditHireRequestComponent;
  let fixture: ComponentFixture<EditHireRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHireRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHireRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
