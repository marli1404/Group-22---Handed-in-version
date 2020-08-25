import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddSkillComponent } from '../../modals/edit-add-skill/edit-add-skill.component';
import { EditAddQuestionComponent } from '../../modals/edit-add-question/edit-add-question.component';
import { EditAddRequirementComponent } from '../../modals/edit-add-requirement/edit-add-requirement.component';

@Component({
  selector: 'app-configskills-and-qs',
  host : { class : 'full-component'},
  templateUrl: './configskills-and-qs.component.html',
  styleUrls: ['./configskills-and-qs.component.css']
})
export class ConfigskillsAndQsComponent implements OnInit {

  constructor(private modal : NgbModal) { }

  ngOnInit(): void {
  }

  addSkill(){
    const modalIntance = this.modal.open(EditAddSkillComponent);
  }
  addQuestion(){
    const modalIntance = this.modal.open(EditAddQuestionComponent);
  }
  addRequirement(){
    const modalIntance = this.modal.open(EditAddRequirementComponent);
  }
}
