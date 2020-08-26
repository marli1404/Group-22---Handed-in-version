import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddSkillComponent } from '../../modals/edit-add-skill/edit-add-skill.component';
import { EditAddQuestionComponent } from '../../modals/edit-add-question/edit-add-question.component';
import { EditAddRequirementComponent } from '../../modals/edit-add-requirement/edit-add-requirement.component';
import { PendingSkillComponent } from '../../modals/pending-skill/pending-skill.component';
import { PendingQuestionComponent } from '../../modals/pending-question/pending-question.component';
import { PendingRequirementComponent } from '../../modals/pending-requirement/pending-requirement.component';

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
  pendingSkills(){
    const modalInstance = this.modal.open(PendingSkillComponent, {windowClass : "largeModal"});
  }

  pendingQuestions(){
    const modalInstance = this.modal.open(PendingQuestionComponent, {windowClass : "largeModal"});
  }

  pendingRequirements(){
    const modalInstance = this.modal.open(PendingRequirementComponent, {windowClass : "largeModal"});
  }
}
