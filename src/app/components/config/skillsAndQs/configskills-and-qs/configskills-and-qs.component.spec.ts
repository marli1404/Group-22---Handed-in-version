import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigskillsAndQsComponent } from './configskills-and-qs.component';

describe('ConfigskillsAndQsComponent', () => {
  let component: ConfigskillsAndQsComponent;
  let fixture: ComponentFixture<ConfigskillsAndQsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigskillsAndQsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigskillsAndQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
