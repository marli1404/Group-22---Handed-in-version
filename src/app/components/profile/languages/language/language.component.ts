import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileAddLanguageComponent } from 'src/app/components/modals/profileAddLanguage/profile-add-language/profile-add-language.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(private modal : NgbModal) { }

  ngOnInit(): void {
  }


  addLanguage(){
    const modalInstance = this.modal.open(ProfileAddLanguageComponent,{windowClass:"largeModal"});
  }
}
