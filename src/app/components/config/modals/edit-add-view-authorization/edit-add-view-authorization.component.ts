import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-add-view-authorization',
  templateUrl: './edit-add-view-authorization.component.html',
  styleUrls: ['./edit-add-view-authorization.component.css']
})
export class EditAddViewAuthorizationComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
