import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddLanguageComponent } from './profile-add-language.component';

describe('ProfileAddLanguageComponent', () => {
  let component: ProfileAddLanguageComponent;
  let fixture: ComponentFixture<ProfileAddLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAddLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAddLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
