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

 constructor(){}


 ngOnInit(){
   
 }

}
