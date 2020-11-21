import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataArchitectComponent } from './data-architect.component';

describe('DataArchitectComponent', () => {
  let component: DataArchitectComponent;
  let fixture: ComponentFixture<DataArchitectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataArchitectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
