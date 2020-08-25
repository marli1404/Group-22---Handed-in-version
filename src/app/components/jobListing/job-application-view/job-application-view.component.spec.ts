import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationViewComponent } from './job-application-view.component';

describe('JobApplicationViewComponent', () => {
  let component: JobApplicationViewComponent;
  let fixture: ComponentFixture<JobApplicationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApplicationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
