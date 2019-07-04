import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeEsperaComponent } from './lista-de-espera.component';

describe('ListaDeEsperaComponent', () => {
  let component: ListaDeEsperaComponent;
  let fixture: ComponentFixture<ListaDeEsperaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeEsperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
