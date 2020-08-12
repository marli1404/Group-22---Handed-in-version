import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddSkillComponent } from './profile-add-skill.component';

describe('ProfileAddSkillComponent', () => {
  let component: ProfileAddSkillComponent;
  let fixture: ComponentFixture<ProfileAddSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAddSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAddSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
