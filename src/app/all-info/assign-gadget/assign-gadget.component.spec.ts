import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignGadgetComponent } from './assign-gadget.component';

describe('AssignGadgetComponent', () => {
  let component: AssignGadgetComponent;
  let fixture: ComponentFixture<AssignGadgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignGadgetComponent]
    });
    fixture = TestBed.createComponent(AssignGadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
