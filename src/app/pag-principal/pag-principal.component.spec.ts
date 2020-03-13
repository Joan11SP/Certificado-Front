import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincipalComponent } from './pag-principal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('PagPrincipalComponent', () => {
  let component: PagPrincipalComponent;
  let fixture: ComponentFixture<PagPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagPrincipalComponent ],
      imports: [ReactiveFormsModule,FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
