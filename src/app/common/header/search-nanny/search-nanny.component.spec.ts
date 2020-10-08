import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNannyComponent } from './search-nanny.component';

describe('SearchNannyComponent', () => {
  let component: SearchNannyComponent;
  let fixture: ComponentFixture<SearchNannyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNannyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNannyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
