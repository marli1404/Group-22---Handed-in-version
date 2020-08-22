import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobCardCreateComponent } from '../../jobCard/job-card-create/job-card-create.component';

@Component({
  selector: 'app-assigned-card',
  templateUrl: './assigned-card.component.html',
  styleUrls: ['./assigned-card.component.css']
})
export class AssignedCardComponent implements OnInit {

  constructor(private modal : NgbModal) { }

  ngOnInit(): void {
  }

  createJobCard(){
    const modalInstance = this.modal.open(JobCardCreateComponent,{windowClass : "hugeModal"});
  }

}
