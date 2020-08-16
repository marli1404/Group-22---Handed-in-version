import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Boostrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgotPassword/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/resetPassword/reset-password/reset-password.component';
import { CreateAccountComponent } from './components/profile/createAccount/create-account/create-account.component';
import { AccountSuccessCreateComponent } from './components/accountSuccess/account-success-create/account-success-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestModalComponent } from './components/test-modal/test-modal.component';
import { ToastComponent } from './components/system/toast/toast.component';
import { ToastsService } from './services/toasts.service';
import { EditProfileMComponent } from './components/modals/editProfile/edit-profile-m/edit-profile-m.component';
import { ProfileCardComponent } from './components/profile/profileWidget/profile-card/profile-card.component';
import { SkillComponent } from './components/profile/skills/skill/skill.component';
import { LanguageComponent } from './components/profile/languages/language/language.component';
import { UploadImageComponent } from './components/modals/uploadImage/upload-image/upload-image.component';
import { ProfileAddSkillComponent } from './components/modals/profileAddSkill/profile-add-skill/profile-add-skill.component';
import { ProfileAddLanguageComponent } from './components/modals/profileAddLanguage/profile-add-language/profile-add-language.component';
import { CompanyConfigComponent } from './components/config/company/company-config/company-config.component';
import { BuildingComponent } from './components/config/building/building/building.component';
import { TableComponent } from './components/config/table/table/table.component';
import { ConfigJobCardComponent } from './components/config/jobCard/config-job-card/config-job-card.component';
import { ConfigRolesAndAuthComponent } from './components/config/rolesAndAuth/config-roles-and-auth/config-roles-and-auth.component';
import { ConfigskillsAndQsComponent } from './components/config/skillsAndQs/configskills-and-qs/configskills-and-qs.component';
import { LogComponent } from './components/audit/log/log/log.component';
import { DatabaseComponent } from './components/audit/database/database/database.component';
import { AuthorizationComponent } from './components/audit/authorization/authorization/authorization.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CreateAccountComponent,
    AccountSuccessCreateComponent,
    TestModalComponent,
    ToastComponent,
    EditProfileMComponent,
    ProfileCardComponent,
    SkillComponent,
    LanguageComponent,
    UploadImageComponent,
    ProfileAddSkillComponent,
    ProfileAddLanguageComponent,
    CompanyConfigComponent,
    BuildingComponent,
    TableComponent,
    ConfigJobCardComponent,
    ConfigRolesAndAuthComponent,
    ConfigskillsAndQsComponent,
    LogComponent,
    DatabaseComponent,
    AuthorizationComponent,
    
     
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [
    FormBuilder,
    ToastsService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ TestModalComponent ]
})
export class AppModule { }
