import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScientistComponent } from './data-scientist.component';

describe('DataScientistComponent', () => {
  let component: DataScientistComponent;
  let fixture: ComponentFixture<DataScientistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataScientistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScientistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
