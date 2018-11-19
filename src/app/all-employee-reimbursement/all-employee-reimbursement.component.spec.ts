import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeeReimbursementComponent } from './all-employee-reimbursement.component';

describe('AllEmployeeReimbursementComponent', () => {
  let component: AllEmployeeReimbursementComponent;
  let fixture: ComponentFixture<AllEmployeeReimbursementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEmployeeReimbursementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeeReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
