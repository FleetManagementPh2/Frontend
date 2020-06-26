import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { AddCompanyComponent } from './Component/Company/add-company/add-company.component';
import { CompanyDetailComponent } from './Component/Company/company-detail/company-detail.component';
import { CompanyListComponent } from './Component/Company/company-list/company-list.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  {path:'Forogotpassword',component:ResetPasswordComponent},
  {path:'add-company', component:AddCompanyComponent},
  {path:'company-detail', component:CompanyDetailComponent},
  {path:'company-list', component:CompanyListComponent},
  {path:'Dashboard', component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
