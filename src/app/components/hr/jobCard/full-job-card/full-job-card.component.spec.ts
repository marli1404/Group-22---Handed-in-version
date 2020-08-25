import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullJobCardComponent } from './full-job-card.component';

describe('FullJobCardComponent', () => {
  let component: FullJobCardComponent;
  let fixture: ComponentFixture<FullJobCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullJobCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
