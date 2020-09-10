import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  userProfile :any;
  userDetails : User;



  constructor(private formBuilder : FormBuilder ) { }

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







}
