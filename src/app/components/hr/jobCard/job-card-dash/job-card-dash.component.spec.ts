import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardDashComponent } from './job-card-dash.component';

describe('JobCardDashComponent', () => {
  let component: JobCardDashComponent;
  let fixture: ComponentFixture<JobCardDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCardDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCardDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
