import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddViewAuthorizationComponent } from './edit-add-view-authorization.component';

describe('EditAddViewAuthorizationComponent', () => {
  let component: EditAddViewAuthorizationComponent;
  let fixture: ComponentFixture<EditAddViewAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddViewAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddViewAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
