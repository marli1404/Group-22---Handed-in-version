import { Component, OnInit } from '@angular/core';
import Stepper from "bs-stepper";
@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

  private stepper: Stepper;
  constructor() { }

  next() {
    this.stepper.next();
  }
  previous() {
    this.stepper.previous();
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }
  
}
