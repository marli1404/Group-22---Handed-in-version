import { Component, OnInit, Input } from '@angular/core';
import { JobRequestInfo } from 'src/app/models/jobReqDetails';

@Component({
  selector: 'app-job-request-details',
  templateUrl: './job-request-details.component.html',
  styleUrls: ['./job-request-details.component.css']
})
export class JobRequestDetailsComponent implements OnInit {

  @Input() jobRequest : JobRequestInfo = null;
  constructor() { }

  ngOnInit(): void {
  }

}
