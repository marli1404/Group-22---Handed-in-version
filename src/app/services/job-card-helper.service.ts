import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { JobRequestInfo } from '../models/jobReqDetails';

@Injectable({
  providedIn: 'root'
})
export class JobCardHelperService {

  private jobInfo = new BehaviorSubject<JobRequestInfo>(null);

  jobDescriptionInfo = this.jobInfo.asObservable();

  changeCard(card : JobRequestInfo){
    this.jobInfo.next(card);
  }
}
