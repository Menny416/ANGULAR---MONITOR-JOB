import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticidadComponent } from './criticidad.component';

describe('CriticidadComponent', () => {
  let component: CriticidadComponent;
  let fixture: ComponentFixture<CriticidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
