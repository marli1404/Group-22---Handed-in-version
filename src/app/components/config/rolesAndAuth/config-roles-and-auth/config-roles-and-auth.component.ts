import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddRoleComponent } from '../../modals/edit-add-role/edit-add-role.component';
import { EditAddJobComponent } from '../../modals/edit-add-job/edit-add-job.component';
import { EditAddViewAuthorizationComponent } from '../../modals/edit-add-view-authorization/edit-add-view-authorization.component';
import { ApiService } from 'src/app/services/api.service';
import { Role } from 'src/app/models/role';
import { ToastsService } from 'src/app/services/toasts.service';
import { Job } from 'src/app/models/job';
import { ViewAuth } from 'src/app/models/viewAuth';

@Component({
  selector: 'app-config-roles-and-auth',
  templateUrl: './config-roles-and-auth.component.html',
  styleUrls: ['./config-roles-and-auth.component.css']
})
export class ConfigRolesAndAuthComponent implements OnInit {

  roles : Role [] = [];
  jobs : Job [] = [];
  viewAuth : ViewAuth [] = [];
  constructor(private modal: NgbModal, private api : ApiService, private toast : ToastsService) { }

  ngOnInit(): void {
    this.getData();
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

  getData(){
    this.getRoles();
    this.getJobs();
    this.getViewAuths();
  }

  getRoles(){
    this.api.getRoles().subscribe( success => this.getRolesSuccess(success), error => this.getRolesFail(error))
  }
  getRolesSuccess(roles: Role[]){
    console.log(roles);
    this.roles = roles;
  }
  getRolesFail(error){
    this.toast.display({type : "Error", heading :error.error.Title, message : error.error.message });
  }
  
  getViewAuth(){

  }

  editRole(id : number){
    console.log(this.roles);
    const modalInstance = this.modal.open(EditAddRoleComponent);
    let role = this.roles.find( x => x.roleId == id);
    modalInstance.componentInstance.editRole = role;
    modalInstance.result.then(res =>{

      this.getData();
    })
    console.log(this.roles);
  }

  deleteRole(id : number){
    this.api.deleteRole(id).subscribe( suc => this.deleteSuccess(suc, id), err => this.deleteFail(err))
  }

  deleteSuccess(success, id){
    this.toast.display({type:"Success", heading : success.Title, message : success.message});
    this.getRoles();
  }
  deleteFail(error){
    this.toast.display({type:"Error", heading : error.error.Title, message : error.error.message});
  }



  /////////////////////////////////////////////////////// JOBS //////////////////////////////////////////////////////////////////////

  editJob(id : number){
    const modalInstance = this.modal.open(EditAddJobComponent);
    modalInstance.componentInstance.editJob = this.jobs.find( x => x.id == id);
    modalInstance.result.then( res =>{
      if(res)
        this.getJobs();
    });
  }
  deleteJob(id : number){

  }

  getJobs(){
    this.api.getJobPositions().subscribe( success => this.getJobSuccess(success), err => this.getJobFail(err))
  }

  getJobSuccess(success){
    this.jobs = success;
  }

  getJobFail(failed){
    this.toast.display({type: "Error", heading : failed.error.Title, message : failed.error.message});
  }






  //VIEW AUTHORIZATION

  getViewAuths(){
    this.api.getViewAuths().subscribe( succ => this.succGetViewAuth(succ), err => this.errGetViewAuth(err))
  }
  succGetViewAuth(succ){
    this.viewAuth = succ;
  }

  errGetViewAuth(err){
    console.log(err);
  }

  editViewAuth(vId : number, rId : number ){
    const modalInstance = this.modal.open(EditAddViewAuthorizationComponent);
    modalInstance.componentInstance.viewId = vId;
    modalInstance.componentInstance.roleId = rId;

  }
  deleteViewAuth(vId : number, rId : number ){
    
  }

}
