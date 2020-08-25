import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantPoolCardComponent } from './applicant-pool-card.component';

describe('ApplicantPoolCardComponent', () => {
  let component: ApplicantPoolCardComponent;
  let fixture: ComponentFixture<ApplicantPoolCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantPoolCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantPoolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
