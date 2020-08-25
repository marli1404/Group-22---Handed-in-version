import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateEmployeeComponent } from '../../createEmployee/create-employee/create-employee.component';

@Component({
  selector: 'app-interview-overview',
  templateUrl: './interview-overview.component.html',
  styleUrls: ['./interview-overview.component.css']
})
export class InterviewOverviewComponent implements OnInit {


  constructor( private modal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  hire(){
    this.modal.close();
  }
}
