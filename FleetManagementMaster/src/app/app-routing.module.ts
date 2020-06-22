import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  {path:'Forogotpassword',component:ResetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
