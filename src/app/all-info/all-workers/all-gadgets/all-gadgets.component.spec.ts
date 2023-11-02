import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGadgetsComponent } from './all-gadgets.component';

describe('AllGadgetsComponent', () => {
  let component: AllGadgetsComponent;
  let fixture: ComponentFixture<AllGadgetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllGadgetsComponent]
    });
    fixture = TestBed.createComponent(AllGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
