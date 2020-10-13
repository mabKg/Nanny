import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyDetailBookingComponent } from './nanny-detail-booking.component';

describe('NannyDetailBookingComponent', () => {
  let component: NannyDetailBookingComponent;
  let fixture: ComponentFixture<NannyDetailBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NannyDetailBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NannyDetailBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
