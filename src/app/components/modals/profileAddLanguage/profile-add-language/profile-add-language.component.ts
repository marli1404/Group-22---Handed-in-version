import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-add-language',
  templateUrl: './profile-add-language.component.html',
  styleUrls: ['./profile-add-language.component.css']
})
export class ProfileAddLanguageComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

}
