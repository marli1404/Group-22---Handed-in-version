import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddRoleComponent } from '../../modals/edit-add-role/edit-add-role.component';
import { EditAddJobComponent } from '../../modals/edit-add-job/edit-add-job.component';
import { EditAddViewAuthorizationComponent } from '../../modals/edit-add-view-authorization/edit-add-view-authorization.component';

@Component({
  selector: 'app-config-roles-and-auth',
  templateUrl: './config-roles-and-auth.component.html',
  styleUrls: ['./config-roles-and-auth.component.css']
})
export class ConfigRolesAndAuthComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  addRole(){
      const modalInstance = this.modal.open(EditAddRoleComponent);
  }
  addJob(){
    const modalInstance = this.modal.open(EditAddJobComponent);
  }
  addViewAuth(){
    const modalInstance = this.modal.open(EditAddViewAuthorizationComponent);
  }

}
