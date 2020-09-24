import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardComponentsComponent } from './leaderboard-components.component';

describe('LeaderboardComponentsComponent', () => {
  let component: LeaderboardComponentsComponent;
  let fixture: ComponentFixture<LeaderboardComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
