import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InterviewOverviewComponent } from '../../modals/interview-overview/interview-overview.component';

@Component({
  selector: 'app-full-job-card',
  host: {class:'full-component'},
  templateUrl: './full-job-card.component.html',
  styleUrls: ['./full-job-card.component.css']
})
export class FullJobCardComponent implements OnInit {

  constructor( private modal : NgbModal) { }

  ngOnInit(): void {
  }

  openOverallInterview(){
    const modalInstance = this.modal.open(InterviewOverviewComponent, {windowClass :"largeModal"});
  }

}
