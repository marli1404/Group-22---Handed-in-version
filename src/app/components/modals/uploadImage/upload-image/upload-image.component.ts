import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { ToastsService } from 'src/app/services/toasts.service';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal, private api : ApiService, private toasts : ToastsService) { }

  validFile : boolean = true;
  file : File;
  
  ngOnInit(): void {
  }

  fileChange(event){
    const acceptedImageTypes = ['image/jpeg', 'image/png'];

    this.file = event.target.files[0];
    if(this.file && acceptedImageTypes.includes(this.file['type'])){
      this.validFile = true;
    }
    else{
      this.validFile = false;
    }
  }

  changeImage(){
    if(this.validFile && this.file){
      this.api.uploadProfile(this.file).subscribe( success => this.imgChangeSuccess(success) , 
      error => this.imgChangeFail(error));
    }
  }

  imgChangeSuccess( success){
    this.activeModal.close(success.imgUrl);
  }
  imgChangeFail(error){
    this.toasts.display({type:"error", heading : (<any>error).error.Title, message : (<any>error).error.message});
    this.activeModal.close();
  }
}
