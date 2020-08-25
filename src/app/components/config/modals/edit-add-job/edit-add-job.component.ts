import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-add-job',
  templateUrl: './edit-add-job.component.html',
  styleUrls: ['./edit-add-job.component.css']
})
export class EditAddJobComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
