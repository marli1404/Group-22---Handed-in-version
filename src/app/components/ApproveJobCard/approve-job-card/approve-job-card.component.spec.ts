import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveJobCardComponent } from './approve-job-card.component';

describe('ApproveJobCardComponent', () => {
  let component: ApproveJobCardComponent;
  let fixture: ComponentFixture<ApproveJobCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveJobCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
