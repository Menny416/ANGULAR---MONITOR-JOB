import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDemo2Component } from './grafico-demo2.component';

describe('GraficoDemo2Component', () => {
  let component: GraficoDemo2Component;
  let fixture: ComponentFixture<GraficoDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
