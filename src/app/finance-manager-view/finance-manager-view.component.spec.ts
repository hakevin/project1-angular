import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceManagerViewComponent } from './finance-manager-view.component';

describe('FinanceManagerViewComponent', () => {
  let component: FinanceManagerViewComponent;
  let fixture: ComponentFixture<FinanceManagerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceManagerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
