import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdinicioComponent } from './sdinicio.component';

describe('SdinicioComponent', () => {
  let component: SdinicioComponent;
  let fixture: ComponentFixture<SdinicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdinicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
