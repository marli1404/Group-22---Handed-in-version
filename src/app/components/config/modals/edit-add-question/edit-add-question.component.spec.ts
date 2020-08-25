import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddQuestionComponent } from './edit-add-question.component';

describe('EditAddQuestionComponent', () => {
  let component: EditAddQuestionComponent;
  let fixture: ComponentFixture<EditAddQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
