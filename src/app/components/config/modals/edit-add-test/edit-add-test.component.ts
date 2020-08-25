import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-add-test',
  templateUrl: './edit-add-test.component.html',
  styleUrls: ['./edit-add-test.component.css']
})
export class EditAddTestComponent implements OnInit {

  constructor( public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

}
