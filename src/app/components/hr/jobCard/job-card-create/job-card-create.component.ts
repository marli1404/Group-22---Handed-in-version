import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-job-card-create',
  templateUrl: './job-card-create.component.html',
  styleUrls: ['./job-card-create.component.css']
})
export class JobCardCreateComponent implements OnInit {

  // PAGINATION CONTROLS
  pageSize : number = 5;
  collectionSize : number = 3;
  constructor() { }

  private stepper: Stepper;

  next() {
    this.stepper.next();
  }
  previous() {
    this.stepper.previous();
  }

  onSubmit() {
    return false;
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

}
