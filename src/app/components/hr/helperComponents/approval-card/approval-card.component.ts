import { Component, OnInit, Input } from '@angular/core';
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
  
  constructor( private modal :NgbModal) { }

  ngOnInit(): void {
  }

  openRequest(){
    const modalInstance = this.modal.open(GenerateJobCardComponent,  { windowClass : "hugeModal"});
  }

}
