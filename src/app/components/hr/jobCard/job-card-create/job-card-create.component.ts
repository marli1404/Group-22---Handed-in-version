import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-job-card-create',
  templateUrl: './job-card-create.component.html',
  styleUrls: ['./job-card-create.component.css']
})
export class JobCardCreateComponent implements OnInit {

  constructor() { }

  private stepper: Stepper;

  next() {
    this.stepper.next();
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
