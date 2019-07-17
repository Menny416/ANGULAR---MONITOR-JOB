import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletoMenuComponent } from './completo-menu.component';

describe('CompletoMenuComponent', () => {
  let component: CompletoMenuComponent;
  let fixture: ComponentFixture<CompletoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
