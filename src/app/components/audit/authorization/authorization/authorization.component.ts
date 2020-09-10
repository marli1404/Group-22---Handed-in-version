import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsService } from 'src/app/services/toasts.service';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditAddViewAuthorizationComponent } from 'src/app/components/config/modals/edit-add-view-authorization/edit-add-view-authorization.component';
import { OperationAuthorisation } from 'src/app/models/operationAuthorization';
@Component({
  selector: 'app-authorization',
  host: {class:'full-component'},
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private modal : NgbModal , private api : ApiService, private toast : ToastsService) { }

  authForm : FormGroup;
  newAuthForm : FormGroup;
  operationAuthorisations : OperationAuthorisation [] = [];

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    this.getOperationAuthorisations();
    // this.getDivisions();

  }

  getOperationAuthorisations(){
    this.api.getOperationAuthorisations().subscribe( success => this.getOperationAuthSuccess(success), error => this.getOperationAuthFail(error))
  }
  //success
  getOperationAuthSuccess(operationAuth: OperationAuthorisation[]){
    console.log(operationAuth);
    this.operationAuthorisations = operationAuth;
  }
  //fail
  getOperationAuthFail(error){
    this.toast.display({type : "Error", heading :error.error.Title, message : error.error.message });
  }

  deleteOperationAuthorisation(roleaffected: string, roletarget : string, operationid : number, dbtableid : number){
    this.api.deleteOperationAuthorisation(roleaffected, roletarget, operationid, dbtableid).subscribe( suc => this.deleteSuccess(suc, operationid), err => this.deleteFail(err))
  }
  deleteSuccess(success, departmentId){
    this.toast.display({type:"Success", heading : success.Title, message : success.message});
    this.getOperationAuthorisations();
  }
  deleteFail(error){
    this.toast.display({type:"Error", heading : error.error.Title, message : error.error.message});
  }

  addOperationAuthorisation(){
    const modalInstance = this.modal.open(AuthorizationComponent);
    modalInstance.result.then((res)=>{

      this.getOperationAuthorisations();
    });
  }





}
