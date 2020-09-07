import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastsService } from 'src/app/services/toasts.service';
import { ApiService } from 'src/app/services/api.service';
import { Justification } from 'src/app/models/justification';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-hire-request',
  host: {class:'full-component'},
  templateUrl: './hire-request.component.html',
  styleUrls: ['./hire-request.component.css']
})
export class HireRequestComponent implements OnInit {

  requestForm : FormGroup;
  justifications : Justification [] = [];
  jobs : Job [] = [];
  constructor(private toast: ToastsService, private formBuilder : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.getData();
    this.buildForm();
  }

  buildForm(){

    this.requestForm = this.formBuilder.group({
        justification : [null, [Validators.required]],
        job : [null, [Validators.required]],
        requestDate :[null, [Validators.required]],
        brief : ['',[Validators.required]]
    })

  }

  getData(){
    this.api.getJustifications().subscribe( success => this.justificationRetSuccess(success), error => this.justificationRetFail(error));
    this.api.getJobPositions().subscribe( success => this.jobRetSuccess(success), error => this.jobRetFail(error));

  }
  justificationRetSuccess(success){
    console.log(success);
    this.justifications = success;
  }
  justificationRetFail(error){
    this.toast.display({type:"Error",heading : error.error.Title, message : error.error.message + "\n"+ error.message});
   
  }
  jobRetSuccess(success){
    this.jobs = success;
  }
  jobRetFail(error){
    this.toast.display({type:"Error",heading : error.error.Title, message : error.error.message + "\n"+ error.message});
  }

  makeRequest(){
    alert('lols');
  }

  

}
