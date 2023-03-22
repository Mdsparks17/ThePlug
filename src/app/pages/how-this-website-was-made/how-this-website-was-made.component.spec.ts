import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowThisWebsiteWasMadeComponent } from './how-this-website-was-made.component';

describe('HowThisWebsiteWasMadeComponent', () => {
  let component: HowThisWebsiteWasMadeComponent;
  let fixture: ComponentFixture<HowThisWebsiteWasMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowThisWebsiteWasMadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowThisWebsiteWasMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
