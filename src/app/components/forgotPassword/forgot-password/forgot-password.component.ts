import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { ToastsService } from 'src/app/services/toasts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  userProfile :any;
  userDetails : User;



  constructor(private formBuilder : FormBuilder , private api : ApiService, private toast : ToastsService, private router : Router) { }

  ngOnInit(): void {
    this.buildForm();

  }
  buildForm(){
    this.userProfile = this.formBuilder.group({
       //SHOULD I KEEP THE TEN DIGIT LIMIT OR LEAVE IT ?
      email : ['',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{1,4}")]],

    });

  }
  getFormInformation(){

    return{

    email : this.userProfile.get('email').value

    }
  }

  get userEmail(){
    return this.userProfile.controls['email'];
  }


  submit(){
    this.resetPassword();
  }

  resetPassword(){
    this.api.forgotPasswordReq(this.userProfile.get('email').value).subscribe( succ =>{
      this.toast.display({type : "Success", heading : "Forgot Password Success!", message : "An email has been sent to your account!"});
      this.router.navigate(['']);
    },
    err=> {this.toast.display({type : "Error", heading : "Forgot Password Error!", message : "We are un able to reset your password at this time"});})
  }

}
