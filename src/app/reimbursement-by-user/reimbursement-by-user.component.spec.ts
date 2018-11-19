import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementByUserComponent } from './reimbursement-by-user.component';

describe('ReimbursementByUserComponent', () => {
  let component: ReimbursementByUserComponent;
  let fixture: ComponentFixture<ReimbursementByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbursementByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
