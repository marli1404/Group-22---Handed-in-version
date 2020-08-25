import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddFloorComponent } from './edit-add-floor.component';

describe('EditAddFloorComponent', () => {
  let component: EditAddFloorComponent;
  let fixture: ComponentFixture<EditAddFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
