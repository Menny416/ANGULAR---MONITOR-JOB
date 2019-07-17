import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCrearComponent } from './ticket-crear.component';

describe('TicketCrearComponent', () => {
  let component: TicketCrearComponent;
  let fixture: ComponentFixture<TicketCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
