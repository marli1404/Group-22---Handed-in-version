import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RejectRequestComponent } from '../reject-request/reject-request.component';

@Component({
  selector: 'app-generate-job-card',
  templateUrl: './generate-job-card.component.html',
  styleUrls: ['./generate-job-card.component.css']
})
export class GenerateJobCardComponent implements OnInit {

  constructor( private modal: NgbModal) { }

  ngOnInit(): void {
  }


  rejectRequest(){
    const modalInstance = this.modal.open(RejectRequestComponent);
  }

}
