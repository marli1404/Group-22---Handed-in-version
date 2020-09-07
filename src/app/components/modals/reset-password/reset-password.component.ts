import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup,FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal,private formBuilder : FormBuilder, private api : ApiService, private toasts : ToastsService) { }

  changePassForm : FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.changePassForm = this.formBuilder.group({
      password : ['',[Validators.required]],
      confirmPassword : ['',[Validators.required]],
    });
  }

  changePass(){
    if(this.changePassForm.valid){
      this.api.changePassword(this.changePassForm.get('password').value).subscribe(
        success =>
        {
          this.toasts.display({type:"Success",heading : (<any>success).Title, message : (<any>success).message});
          this.activeModal.close();
        }
        ,error =>{
          this.toasts.display({type:"Error",heading : (<any>error.error).Title, message : (<any>error.error).message});
          this.activeModal.close();
        }
      );
    }
  }
  




}
