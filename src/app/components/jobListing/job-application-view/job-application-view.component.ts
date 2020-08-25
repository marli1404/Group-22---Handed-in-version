import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobApplicationComponent } from '../jobApplication/job-application/job-application.component';

@Component({
  selector: 'app-job-application-view',
  host: {class:'full-component'},
  templateUrl: './job-application-view.component.html',
  styleUrls: ['./job-application-view.component.css']
})
export class JobApplicationViewComponent implements OnInit {

  constructor( private modal : NgbModal) { }

  ngOnInit(): void {
  }
  jobApply(){
    const modalInstance = this.modal.open(JobApplicationComponent,{windowClass:"largeModal"});
  }

}
