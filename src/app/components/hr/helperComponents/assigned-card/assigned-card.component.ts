import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobCardCreateComponent } from '../../jobCard/job-card-create/job-card-create.component';
import { JobRequestInfo } from 'src/app/models/jobReqDetails';
import { JobCardHelperService } from 'src/app/services/job-card-helper.service';

@Component({
  selector: 'app-assigned-card',
  templateUrl: './assigned-card.component.html',
  styleUrls: ['./assigned-card.component.css']
})
export class AssignedCardComponent implements OnInit {

  @Input() cardDetails : JobRequestInfo;

  constructor(private modal : NgbModal, private cardHelper : JobCardHelperService) { }

  ngOnInit(): void {
  }

  createJobCard(){
    this.cardHelper.changeCard(this.cardDetails);
    const modalInstance = this.modal.open(JobCardCreateComponent,{windowClass : "hugeModal"});
    //modalInstance.componentInstance.cardInfo = this.cardDetails;
  }

}
