import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAreaComponent } from './agregar-area.component';

describe('AgregarAreaComponent', () => {
  let component: AgregarAreaComponent;
  let fixture: ComponentFixture<AgregarAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
