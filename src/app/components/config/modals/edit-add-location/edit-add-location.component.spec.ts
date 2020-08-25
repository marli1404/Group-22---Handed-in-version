import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddLocationComponent } from './edit-add-location.component';

describe('EditAddLocationComponent', () => {
  let component: EditAddLocationComponent;
  let fixture: ComponentFixture<EditAddLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
