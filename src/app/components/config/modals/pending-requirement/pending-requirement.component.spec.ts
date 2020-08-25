import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingRequirementComponent } from './pending-requirement.component';

describe('PendingRequirementComponent', () => {
  let component: PendingRequirementComponent;
  let fixture: ComponentFixture<PendingRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
