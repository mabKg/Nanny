import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyCreateComponent } from './nanny-create.component';

describe('NannyCreateComponent', () => {
  let component: NannyCreateComponent;
  let fixture: ComponentFixture<NannyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NannyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NannyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
