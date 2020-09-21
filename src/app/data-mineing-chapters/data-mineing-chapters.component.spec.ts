import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMineingChaptersComponent } from './data-mineing-chapters.component';

describe('DataMineingChaptersComponent', () => {
  let component: DataMineingChaptersComponent;
  let fixture: ComponentFixture<DataMineingChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMineingChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMineingChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
