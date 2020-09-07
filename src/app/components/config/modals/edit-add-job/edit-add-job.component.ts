import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Job } from 'src/app/models/job';
import { ToastsService } from 'src/app/services/toasts.service';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-add-job',
  templateUrl: './edit-add-job.component.html',
  styleUrls: ['./edit-add-job.component.css']
})
export class EditAddJobComponent implements OnInit {

  @Input() editJob : Job = null;

  jobForm : FormGroup;
  constructor(public activeModal: NgbActiveModal, private toast : ToastsService, private api : ApiService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.jobForm = this.formBuilder.group({
      jobName : ['',[Validators.required]]
    });

    if(this.editJob)
      this.jobForm.get("jobName").setValue(this.editJob.name)
  }

  saveJob(){
    if(this.editJob){
      let job : any = this.getFormDetails()
      job.id = this.editJob.id;
      console.log(job);
      this.api.editJob(job).subscribe( success => this.editJobSuccess(success), err => this.editJobFailed(err));
    }
    else
      this.api.createJob(this.getFormDetails()).subscribe( succ => this.newJobSucc(succ), err => this.newJobFailed(err));
      
  }
  editJobSuccess(succ){
    this.toast.display({type :"Success", heading : succ.Title, message : succ.message});
    this.activeModal.close('success');
  }
  
  editJobFailed(err){
    this.toast.display({type :"Error", heading : err.error.Title, message : err.error.message});
    this.activeModal.close();
  }
  newJobSucc(succ){
    this.toast.display({type :"Success", heading : succ.Title, message : succ.message});
    this.activeModal.close('success');
  }
  
  newJobFailed(err){
    this.toast.display({type :"Error", heading : err.error.Title, message : err.error.message});
    this.activeModal.close();
  }

  getFormDetails(){

    return {
      jobName : this.jobForm.get('jobName').value,
    } 
  }

}
