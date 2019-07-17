import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDemo1Component } from './grafico-demo1.component';

describe('GraficoDemo1Component', () => {
  let component: GraficoDemo1Component;
  let fixture: ComponentFixture<GraficoDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
