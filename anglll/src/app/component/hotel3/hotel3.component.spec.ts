import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotel3Component } from './hotel3.component';

describe('Hotel3Component', () => {
  let component: Hotel3Component;
  let fixture: ComponentFixture<Hotel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hotel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hotel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
