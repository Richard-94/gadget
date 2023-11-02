import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedGadgetsComponent } from './assigned-gadgets.component';

describe('AssignedGadgetsComponent', () => {
  let component: AssignedGadgetsComponent;
  let fixture: ComponentFixture<AssignedGadgetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedGadgetsComponent]
    });
    fixture = TestBed.createComponent(AssignedGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
