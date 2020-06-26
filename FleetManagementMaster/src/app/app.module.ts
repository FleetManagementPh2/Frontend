import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { SidebarComponent } from './Component/Sidebar/sidebar.component';
import { AddCompanyComponent } from './Component/Company/add-company/add-company.component';
import { CompanyDetailComponent } from './Component/Company/company-detail/company-detail.component';
import { CompanyListComponent } from './Component/Company/company-list/company-list.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    SidebarComponent,
    AddCompanyComponent,
    CompanyDetailComponent,
    CompanyListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
