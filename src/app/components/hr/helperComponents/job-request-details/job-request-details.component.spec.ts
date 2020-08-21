import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequestDetailsComponent } from './job-request-details.component';

describe('JobRequestDetailsComponent', () => {
  let component: JobRequestDetailsComponent;
  let fixture: ComponentFixture<JobRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
