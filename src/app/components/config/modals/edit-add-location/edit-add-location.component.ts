import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-add-location',
  templateUrl: './edit-add-location.component.html',
  styleUrls: ['./edit-add-location.component.css']
})
export class EditAddLocationComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
