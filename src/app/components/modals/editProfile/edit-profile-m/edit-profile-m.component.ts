import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadImageComponent } from '../../uploadImage/upload-image/upload-image.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-profile-m',
  templateUrl: './edit-profile-m.component.html',
  styleUrls: ['./edit-profile-m.component.css']
})
export class EditProfileMComponent implements OnInit {

  userProfile :any;

  constructor( public activeModal : NgbActiveModal, private modal : NgbModal, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  changeImage(){

    const uploadInstance = this.modal.open(UploadImageComponent, { size: 'lg', backdrop: 'static' });
  }

  buildForm(){
    this.userProfile = this.formBuilder.group({
      name : ['',[Validators.required, ]],
      surname : ['',[Validators.required, ]],
      contact : ['',[Validators.required, Validators.maxLength(10) ]], //SHOULD I KEEP THE TEN DIGIT LIMIT OR LEAVE IT ?
      email : ['',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,4}$")]],
      password : ['',[Validators.required, Validators.minLength(6)]], //any specific business roles to the structure of the password
      passconfirm : ['',[Validators.required,  Validators.minLength(6), Validators.nullValidator]],
      countryId : [null,[Validators.required]],
      nationalityId : [null,[Validators.required]],
    });

    //do we need the required attribute in the edit profile html page

  }

}
