import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateInterviewComponent } from '../../modals/create-interview/create-interview.component';
import { ViewApplicationComponent } from '../../modals/view-application/view-application.component';

@Component({
  selector: 'app-applicant-pool-card',
  templateUrl: './applicant-pool-card.component.html',
  styleUrls: ['./applicant-pool-card.component.css']
})
export class ApplicantPoolCardComponent implements OnInit {

  constructor( private modal : NgbModal) { }

  ngOnInit(): void {
  }

  createInterview(){
    const modalInstance = this.modal.open(CreateInterviewComponent,{ windowClass : "largeModal"});
  }

  viewApplication(){
    const modalInstance = this.modal.open(ViewApplicationComponent,{ windowClass : "hugeModal"});
  }

}
