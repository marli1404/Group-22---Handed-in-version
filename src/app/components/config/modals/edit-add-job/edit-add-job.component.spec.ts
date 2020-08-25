import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddJobComponent } from './edit-add-job.component';

describe('EditAddJobComponent', () => {
  let component: EditAddJobComponent;
  let fixture: ComponentFixture<EditAddJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
