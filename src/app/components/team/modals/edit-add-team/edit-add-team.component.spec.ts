import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddTeamComponent } from './edit-add-team.component';

describe('EditAddTeamComponent', () => {
  let component: EditAddTeamComponent;
  let fixture: ComponentFixture<EditAddTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
