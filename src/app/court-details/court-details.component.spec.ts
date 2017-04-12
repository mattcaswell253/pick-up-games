import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtDetailsComponent } from './court-details.component';

describe('CourtDetailsComponent', () => {
  let component: CourtDetailsComponent;
  let fixture: ComponentFixture<CourtDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
