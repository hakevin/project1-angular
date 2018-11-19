import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { FinanceManagerViewComponent } from './finance-manager-view/finance-manager-view.component';
import { SubmitComponent } from './submit/submit.component';

 export const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'employee/view', component: EmployeeViewComponent},
{path: 'manager/view', component: FinanceManagerViewComponent},
{path: 'submit', component: SubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
