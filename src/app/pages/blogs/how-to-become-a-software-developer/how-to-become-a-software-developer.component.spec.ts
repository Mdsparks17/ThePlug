import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBecomeASoftwareDeveloperComponent } from './how-to-become-a-software-developer.component';

describe('HowToBecomeASoftwareDeveloperComponent', () => {
  let component: HowToBecomeASoftwareDeveloperComponent;
  let fixture: ComponentFixture<HowToBecomeASoftwareDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToBecomeASoftwareDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToBecomeASoftwareDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
