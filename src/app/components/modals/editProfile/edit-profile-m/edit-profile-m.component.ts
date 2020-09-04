import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadImageComponent } from '../../uploadImage/upload-image/upload-image.component';
import { ResetPasswordComponent } from 'src/app/components/modals/reset-password/reset-password.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Country } from 'src/app/models/country';
import { Nationality } from 'src/app/models/Nationality';
import { TestModalComponent } from 'src/app/components/test-modal/test-modal.component';

@Component({
  selector: 'app-edit-profile-m',
  templateUrl: './edit-profile-m.component.html',
  styleUrls: ['./edit-profile-m.component.css']
})
export class EditProfileMComponent implements OnInit {

  editProfile :any;
  userDetails : User;

  @Input() userId : number;

  constructor( public activeModal : NgbActiveModal, private modal : NgbModal, private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.getProfileDetails();
    this.buildForm();
  }

  changeImage(){
    const uploadInstance = this.modal.open(UploadImageComponent, { size: 'lg', backdrop: 'static' });
  }

  changePassword(){
    const modalInstance = this.modal.open(ResetPasswordComponent,{ size: 'lg'});
  }
  buildForm(){

    this.editProfile = this.formBuilder.group({
      name : ['',[Validators.required, Validators.pattern("[a-zA-Z]+") ]],
      surname : ['',[Validators.required,  Validators.pattern("[a-zA-Z]+")]],
      contact : ['',[Validators.required, Validators.maxLength(10) ]],
      email : ['',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,4}$")]],
      //password : ['',[Validators.required, Validators.minLength(6)]], //any specific business roles to the structure of the password
     // passconfirm : ['',[Validators.required,  Validators.minLength(6), Validators.nullValidator]],
      countryId : [null,[Validators.required]],
      nationalityId : [null,[Validators.required]],
    });

  



  }

  get userName(){
    return this.editProfile.controls['name'];
  }
  get userSurname(){
    return this.editProfile.controls['surname'];
  }
  get userContact(){
    return this.editProfile.controls['contact'];
  }
  get userEmail(){
    return this.editProfile.controls['email'];
  }
  get userCountry(){
    return this.editProfile.controls['countryId'];
  }
  get userNationality(){
    return this.editProfile.controls['nationalityId'];
  }
  get userPass(){
    return this.editProfile.controls['password'];
  }
  get userPassConfirm(){
    return this.editProfile.controls['passconfirm'];
  }

  getProfileDetails(){
    
  }


}
