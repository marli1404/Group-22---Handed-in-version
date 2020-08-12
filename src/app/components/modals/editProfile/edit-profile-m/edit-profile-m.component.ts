import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadImageComponent } from '../../uploadImage/upload-image/upload-image.component';

@Component({
  selector: 'app-edit-profile-m',
  templateUrl: './edit-profile-m.component.html',
  styleUrls: ['./edit-profile-m.component.css']
})
export class EditProfileMComponent implements OnInit {

  constructor( public activeModal : NgbActiveModal, private modal : NgbModal) { }

  ngOnInit(): void {
  }

  changeImage(){

    const uploadInstance = this.modal.open(UploadImageComponent, { size: 'lg', backdrop: 'static' });
  }

}
