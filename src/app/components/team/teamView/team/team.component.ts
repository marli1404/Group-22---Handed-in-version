import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddTeamComponent } from '../../modals/edit-add-team/edit-add-team.component';

@Component({
  selector: 'app-team',
  host: {class:'full-component'},
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private modal : NgbModal) { }

  ngOnInit(): void {
  }

  addTeam(){
    const modalInstance = this.modal.open(EditAddTeamComponent, {windowClass: "largeModal"});
  }

  addTeamMembers(){
    const modalInstance = this.modal.open(EditAddTeamComponent, {windowClass: "largeModal"});
    modalInstance.componentInstance.addMember = true;
  }

}
