import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsService } from 'src/app/services/toasts.service';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast } from 'src/app/models/toast';
import { Stage } from 'src/app/models/stage';

@Component({
  selector: 'app-edit-add-stage',
  templateUrl: './edit-add-stage.component.html',
  styleUrls: ['./edit-add-stage.component.css']
})
export class EditAddStageComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal, private toast: ToastsService, private api: ApiService, private formBuilder: FormBuilder ) { }

  @Input() editStage : Stage =  null;

  stageForm: FormGroup;

  ngOnInit(): void {

    this.buildForm();

    if(this.editStage){
      this.stageForm.get('stage').setValue(this.editStage.stage); //API?
    }

  }

  buildForm(){
    this.stageForm = this.formBuilder.group({

      name : ['', [Validators.required]]
    });
  }

  getFormDetails(){

    return {
      name : this.stageForm.get('name').value,
    }
  }

  save(){
    let stage : any  = this.getFormDetails();
    console.log(stage);
    if(!this.editStage){
      this.api.addStage(stage).subscribe( success => this.addStageSuccess(success), error => this.addStagesFailed(error));
    }

    else{
      stage.id = this.editStage.id;
      this.editStage.stage = stage.stage;
      this.api.editStage(stage).subscribe( success => this.editStageSuccess(success), error => this.editStageFailed(error));
    }

  }

  addStageSuccess(success){
    let toast = new Toast;
    toast.type = "Success";
    toast.heading = success.Title;
    toast.message = success.message;
    this.toast.display(toast);
    this.activeModal.close();
  }

  addStagesFailed(error){
    console.log(error);
    let toast = new Toast;
    toast.type = "Error";
    toast.heading = error.error.Title;
    toast.message = error.error.message;
    this.toast.display(toast);
    this.activeModal.close();

  }
  editStageSuccess(success){
    let toast = new Toast;
    toast.type = "Success";
    toast.heading = success.Title;
    toast.message = success.message;
    this.toast.display(toast);
    this.activeModal.close();
  }

  editStageFailed(error){
    console.log(error);
    let toast = new Toast;
    toast.type = "Error";
    toast.heading = error.error.Title;
    toast.message = error.error.message;
    this.toast.display(toast);
    this.activeModal.close();

  }

}
