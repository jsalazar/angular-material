import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormzComponent } from './formz.component';

describe('FormzComponent', () => {
  let component: FormzComponent;
  let fixture: ComponentFixture<FormzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
