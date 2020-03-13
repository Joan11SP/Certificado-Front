import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatos1Component } from './form-datos1.component';

describe('FormDatos1Component', () => {
  let component: FormDatos1Component;
  let fixture: ComponentFixture<FormDatos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDatos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDatos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
