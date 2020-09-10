import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { JobRequestInfo } from 'src/app/models/jobReqDetails';
import { JobCardHelperService } from 'src/app/services/job-card-helper.service';
import { BehaviorSubject, Observable, Observer, Subscription } from 'rxjs';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-job-request-details',
  templateUrl: './job-request-details.component.html',
  styleUrls: ['./job-request-details.component.css']
})
export class JobRequestDetailsComponent implements OnInit, OnDestroy {



  requestInfo : Subscription;
  
  @Input() cardDetails : JobRequestInfo = null;
  constructor(private jobHelper : JobCardHelperService) { }

  ngOnInit(): void {
   this.requestInfo = this.jobHelper.jobDescriptionInfo.subscribe( next => this.setRequest(next));
   
  }
  setRequest(next){
    this.cardDetails = next;
    console.log(next, " TESTING STUFF");
  }
  tester(val){
    console.log("Job Request", val);
  }

  ngOnDestroy(){
    this.requestInfo.unsubscribe();
  }

}
