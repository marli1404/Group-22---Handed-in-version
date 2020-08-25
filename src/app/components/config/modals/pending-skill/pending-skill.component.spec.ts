import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSkillComponent } from './pending-skill.component';

describe('PendingSkillComponent', () => {
  let component: PendingSkillComponent;
  let fixture: ComponentFixture<PendingSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
