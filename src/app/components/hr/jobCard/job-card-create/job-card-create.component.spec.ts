import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardCreateComponent } from './job-card-create.component';

describe('JobCardCreateComponent', () => {
  let component: JobCardCreateComponent;
  let fixture: ComponentFixture<JobCardCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCardCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
