import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienShrineComponent } from './alien-shrine.component';

describe('AlienShrineComponent', () => {
  let component: AlienShrineComponent;
  let fixture: ComponentFixture<AlienShrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlienShrineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienShrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
