import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { FinanceManagerViewComponent } from './finance-manager-view/finance-manager-view.component';
import { SubmitComponent } from './submit/submit.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeReimbursementComponent } from './employee-reimbursement/employee-reimbursement.component';
import { AllEmployeeReimbursementComponent } from './all-employee-reimbursement/all-employee-reimbursement.component';
import { ResolvedComponent } from './resolved/resolved.component';
import { ReimbursementByUserComponent } from './reimbursement-by-user/reimbursement-by-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponentComponent,
    EmployeeViewComponent,
    FinanceManagerViewComponent,
    SubmitComponent,
    EmployeeReimbursementComponent,
    AllEmployeeReimbursementComponent,
    ResolvedComponent,
    ReimbursementByUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
