import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigJobCardComponent } from './config-job-card.component';

describe('ConfigJobCardComponent', () => {
  let component: ConfigJobCardComponent;
  let fixture: ComponentFixture<ConfigJobCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigJobCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
