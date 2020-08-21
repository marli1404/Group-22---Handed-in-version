import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateJobCardComponent } from './generate-job-card.component';

describe('GenerateJobCardComponent', () => {
  let component: GenerateJobCardComponent;
  let fixture: ComponentFixture<GenerateJobCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateJobCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
