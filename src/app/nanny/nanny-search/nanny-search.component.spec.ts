import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NannySearchComponent } from './nanny-search.component';

describe('NannySearchComponent', () => {
  let component: NannySearchComponent;
  let fixture: ComponentFixture<NannySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NannySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NannySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
