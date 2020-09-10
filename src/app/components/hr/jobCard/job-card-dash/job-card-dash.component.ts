import { Component, OnInit } from '@angular/core';
import { JobRequestInfo } from 'src/app/models/jobReqDetails';
import { ApiService } from 'src/app/services/api.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-job-card-dash',
  host: {class:'full-component'},
  templateUrl: './job-card-dash.component.html',
  styleUrls: ['./job-card-dash.component.css']
})
export class JobCardDashComponent implements OnInit {


  assignedCards : JobRequestInfo [] = [];
  constructor(private api : ApiService, private toast : ToastsService){}


  ngOnInit(){
    this.loadData();
  }

 loadData(){
  this.getAssignedCards();

 }

 getAssignedCards(){
   this.api.getAssignedJobCards().subscribe( succ => this.retCardSuccess(succ), err => this.retCardFail(err));
 }
 retCardSuccess(success){
    this.assignedCards = success;
    console.log(success);
 }

 retCardFail(error){
   this.toast.display({type : "Error", heading : error.error?.Title, message : error.error.message + "\n" + error.message});
 }
}
