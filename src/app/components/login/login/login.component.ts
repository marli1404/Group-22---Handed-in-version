import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthService, private builder : FormBuilder, private router : Router) { }
  userDetails : FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }



  buildForm(){
    this.userDetails = this.builder.group({
      'email':['',[Validators.required]],
      'password':['',Validators.required]
    });
  }
  getFormValues(){

    return {
      email : this.userDetails.get('email').value,
      password : this.userDetails.get('password').value
    }

  }

  login(){
    this.auth.logIn(this.getFormValues()).subscribe( success => this.logInSuccess(),
     error => this.loginFailed(error));
  }

  logInSuccess(){

    if(this.auth.isLoggedIn)
      this.router.navigate(['/Dashboard']);
  }

  loginFailed(error: any){
    console.log(error)
  }

  get email(){
    return this.userDetails.get('email');
  }
  get password(){
    return this.userDetails.get('password');
  }
}
