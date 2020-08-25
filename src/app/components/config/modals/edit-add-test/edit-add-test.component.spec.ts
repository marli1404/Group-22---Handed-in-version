import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddTestComponent } from './edit-add-test.component';

describe('EditAddTestComponent', () => {
  let component: EditAddTestComponent;
  let fixture: ComponentFixture<EditAddTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
