import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-add-floor',
  templateUrl: './edit-add-floor.component.html',
  styleUrls: ['./edit-add-floor.component.css']
})
export class EditAddFloorComponent implements OnInit {

  constructor( public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

}
