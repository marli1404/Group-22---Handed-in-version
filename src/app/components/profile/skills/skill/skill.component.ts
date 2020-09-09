import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileAddSkillComponent } from 'src/app/components/modals/profileAddSkill/profile-add-skill/profile-add-skill.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor( private modal :NgbModal, private api : ApiService, ) { }

  ngOnInit(): void {
  }

  skillAddition(){
    const modalInstance = this.modal.open(ProfileAddSkillComponent,{ windowClass : "largeModal"});
  }

}
