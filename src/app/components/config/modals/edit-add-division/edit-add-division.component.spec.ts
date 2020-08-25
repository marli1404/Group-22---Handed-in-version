import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddDivisionComponent } from './edit-add-division.component';

describe('EditAddDivisionComponent', () => {
  let component: EditAddDivisionComponent;
  let fixture: ComponentFixture<EditAddDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
