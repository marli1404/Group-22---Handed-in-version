import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { ForgotPasswordComponent } from './components/forgotPassword/forgot-password/forgot-password.component';
import { CreateAccountComponent } from './components/profile/createAccount/create-account/create-account.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/resetPassword/reset-password/reset-password.component';
import { AccountSuccessCreateComponent } from './components/accountSuccess/account-success-create/account-success-create.component';


const routes: Routes = [
{ path: "", component : LoginComponent},
{ path: "ForgotPassword", component : ForgotPasswordComponent},
{ path: "CreateAccount", component : CreateAccountComponent},
{ path: "Dashboard", component : DashboardComponent},
{ path: "AccountCreated", component : AccountSuccessCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
