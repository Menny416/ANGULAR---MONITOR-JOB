import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDemo3Component } from './grafico-demo3.component';

describe('GraficoDemo3Component', () => {
  let component: GraficoDemo3Component;
  let fixture: ComponentFixture<GraficoDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
