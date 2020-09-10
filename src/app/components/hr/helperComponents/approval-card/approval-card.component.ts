import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobRequestDetailsComponent } from '../job-request-details/job-request-details.component';
import { GenerateJobCardComponent } from '../../modals/generate-job-card/generate-job-card.component';
import { JobRequestInfo } from 'src/app/models/jobReqDetails';


@Component({
  selector: 'app-approval-card',
  templateUrl: './approval-card.component.html',
  styleUrls: ['./approval-card.component.css']
})
export class ApprovalCardComponent implements OnInit {
  
  @Input() cardDetails : JobRequestInfo;
  @Output() event : EventEmitter<Boolean> = new EventEmitter;
  constructor( private modal :NgbModal) { }

  ngOnInit(): void {
  }

  openRequest(){
    const modalInstance = this.modal.open(GenerateJobCardComponent,  { windowClass : "hugeModal"});
    modalInstance.componentInstance.requestDetails = this.cardDetails;
    modalInstance.result.then( () =>{
      this.event.emit(true);
    });
  }

}
