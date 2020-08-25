import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddBuildingComponent } from './edit-add-building.component';

describe('EditAddBuildingComponent', () => {
  let component: EditAddBuildingComponent;
  let fixture: ComponentFixture<EditAddBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
