import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetarySystemComponent } from './planetary-system.component';

describe('PlanetarySystemComponent', () => {
  let component: PlanetarySystemComponent;
  let fixture: ComponentFixture<PlanetarySystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetarySystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetarySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
