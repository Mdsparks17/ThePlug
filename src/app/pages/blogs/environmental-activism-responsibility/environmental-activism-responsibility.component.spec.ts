import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalActivismResponsibilityComponent } from './environmental-activism-responsibility.component';

describe('EnvironmentalActivismResponsibilityComponent', () => {
  let component: EnvironmentalActivismResponsibilityComponent;
  let fixture: ComponentFixture<EnvironmentalActivismResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentalActivismResponsibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalActivismResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
