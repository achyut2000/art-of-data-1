import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCleaningQuizComponent } from './data-cleaning-quiz.component';

describe('DataCleaningQuizComponent', () => {
  let component: DataCleaningQuizComponent;
  let fixture: ComponentFixture<DataCleaningQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCleaningQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCleaningQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
