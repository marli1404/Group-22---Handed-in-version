import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { ForgotPasswordComponent } from './components/forgotPassword/forgot-password/forgot-password.component';
import { CreateAccountComponent } from './components/profile/createAccount/create-account/create-account.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/resetPassword/reset-password/reset-password.component';
import { AccountSuccessCreateComponent } from './components/accountSuccess/account-success-create/account-success-create.component';
import { BuildingComponent } from './components/config/building/building/building.component'
import { CompanyConfigComponent } from './components/config/company/company-config/company-config.component';
import { TableComponent } from './components/config/table/table/table.component';
import { ConfigJobCardComponent } from './components/config/jobCard/config-job-card/config-job-card.component';
import { ConfigRolesAndAuthComponent } from './components/config/rolesAndAuth/config-roles-and-auth/config-roles-and-auth.component';
import { ConfigskillsAndQsComponent } from './components/config/skillsAndQs/configskills-and-qs/configskills-and-qs.component';
import { LogComponent } from './components/audit/log/log/log.component';
import { AuthorizationComponent } from './components/audit/authorization/authorization/authorization.component';
import { DatabaseComponent } from './components/audit/database/database/database.component';

const routes: Routes = [
{ path: "", component : LoginComponent},
{ path: "ForgotPassword", component : ForgotPasswordComponent},
{ path: "CreateAccount", component : CreateAccountComponent},
{ path: "Dashboard", component : DashboardComponent,
  children : [
      { path : "ConfigBuilding", component : BuildingComponent},
      { path : "ConfigCompany", component : CompanyConfigComponent},
      { path : "ConfigJobCard", component : ConfigJobCardComponent},
      { path : "ConfigRolesAndAuthorization", component : ConfigRolesAndAuthComponent},
      { path : "ConfigTable", component : TableComponent},
      { path : "ConfigSkillsAndQuestions", component : ConfigskillsAndQsComponent},
      { path : "AuditLog", component : LogComponent},
      { path : "AuditAuthorization", component : AuthorizationComponent},
      { path : "AuditDatabase", component : DatabaseComponent},
  ]},
{ path: "AccountCreated", component : AccountSuccessCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
