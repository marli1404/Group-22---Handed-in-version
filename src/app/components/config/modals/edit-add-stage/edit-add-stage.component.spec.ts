import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddStageComponent } from './edit-add-stage.component';

describe('EditAddStageComponent', () => {
  let component: EditAddStageComponent;
  let fixture: ComponentFixture<EditAddStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
