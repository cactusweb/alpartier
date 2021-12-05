import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqTabletComponent } from './faq-tablet.component';

describe('FaqTabletComponent', () => {
  let component: FaqTabletComponent;
  let fixture: ComponentFixture<FaqTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqTabletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
