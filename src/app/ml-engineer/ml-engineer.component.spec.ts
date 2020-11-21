import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlEngineerComponent } from './ml-engineer.component';

describe('MlEngineerComponent', () => {
  let component: MlEngineerComponent;
  let fixture: ComponentFixture<MlEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
