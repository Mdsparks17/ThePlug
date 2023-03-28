import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingLinuxDailyComponent } from './using-linux-daily.component';

describe('UsingLinuxDailyComponent', () => {
  let component: UsingLinuxDailyComponent;
  let fixture: ComponentFixture<UsingLinuxDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingLinuxDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingLinuxDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
