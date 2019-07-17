import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCMComponent } from './header-cm.component';

describe('HeaderCMComponent', () => {
  let component: HeaderCMComponent;
  let fixture: ComponentFixture<HeaderCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
