import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlayersComponent } from './edit-players.component';

describe('EditPlayersComponent', () => {
  let component: EditPlayersComponent;
  let fixture: ComponentFixture<EditPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
