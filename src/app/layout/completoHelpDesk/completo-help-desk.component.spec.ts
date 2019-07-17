import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletoHelpDeskComponent } from './completo-help-desk.component';

describe('CompletoHelpDeskComponent', () => {
  let component: CompletoHelpDeskComponent;
  let fixture: ComponentFixture<CompletoHelpDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletoHelpDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletoHelpDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
