import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddRequirementComponent } from './edit-add-requirement.component';

describe('EditAddRequirementComponent', () => {
  let component: EditAddRequirementComponent;
  let fixture: ComponentFixture<EditAddRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
