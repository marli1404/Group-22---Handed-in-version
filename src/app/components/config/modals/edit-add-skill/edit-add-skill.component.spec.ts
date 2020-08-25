import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddSkillComponent } from './edit-add-skill.component';

describe('EditAddSkillComponent', () => {
  let component: EditAddSkillComponent;
  let fixture: ComponentFixture<EditAddSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
