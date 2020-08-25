import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-add-skill',
  templateUrl: './edit-add-skill.component.html',
  styleUrls: ['./edit-add-skill.component.css']
})
export class EditAddSkillComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

}
