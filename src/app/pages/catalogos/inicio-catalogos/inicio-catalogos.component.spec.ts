import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCatalogosComponent } from './inicio-catalogos.component';

describe('InicioCatalogosComponent', () => {
  let component: InicioCatalogosComponent;
  let fixture: ComponentFixture<InicioCatalogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioCatalogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
