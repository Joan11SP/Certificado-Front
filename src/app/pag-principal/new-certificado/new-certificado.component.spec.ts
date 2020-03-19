import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCertificadoComponent } from './new-certificado.component';

describe('NewCertificadoComponent', () => {
  let component: NewCertificadoComponent;
  let fixture: ComponentFixture<NewCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
