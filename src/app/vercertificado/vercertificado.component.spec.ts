import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VercertificadoComponent } from './vercertificado.component';

describe('VercertificadoComponent', () => {
  let component: VercertificadoComponent;
  let fixture: ComponentFixture<VercertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VercertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VercertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
