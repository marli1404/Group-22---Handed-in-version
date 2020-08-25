import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-add-role',
  templateUrl: './edit-add-role.component.html',
  styleUrls: ['./edit-add-role.component.css']
})
export class EditAddRoleComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

}
