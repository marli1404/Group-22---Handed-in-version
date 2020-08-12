import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRolesAndAuthComponent } from './config-roles-and-auth.component';

describe('ConfigRolesAndAuthComponent', () => {
  let component: ConfigRolesAndAuthComponent;
  let fixture: ComponentFixture<ConfigRolesAndAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigRolesAndAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRolesAndAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
