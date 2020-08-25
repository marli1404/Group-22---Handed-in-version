import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddRoleComponent } from './edit-add-role.component';

describe('EditAddRoleComponent', () => {
  let component: EditAddRoleComponent;
  let fixture: ComponentFixture<EditAddRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
