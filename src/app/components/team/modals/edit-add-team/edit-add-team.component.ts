import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-add-team',
  templateUrl: './edit-add-team.component.html',
  styleUrls: ['./edit-add-team.component.css']
})
export class EditAddTeamComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal) { }

  @Input() addMember = false;
  @Input() editing = false;
  
  ngOnInit(): void {
  }

}
