import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSuccessCreateComponent } from './account-success-create.component';

describe('AccountSuccessCreateComponent', () => {
  let component: AccountSuccessCreateComponent;
  let fixture: ComponentFixture<AccountSuccessCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSuccessCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSuccessCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
