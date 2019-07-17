import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMensualComponent } from './grafico-mensual.component';

describe('GraficoMensualComponent', () => {
  let component: GraficoMensualComponent;
  let fixture: ComponentFixture<GraficoMensualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoMensualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
