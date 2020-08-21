import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewRecordComponent } from './interview-record.component';

describe('InterviewRecordComponent', () => {
  let component: InterviewRecordComponent;
  let fixture: ComponentFixture<InterviewRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
