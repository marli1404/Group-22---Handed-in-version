import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-create-interview',
  templateUrl: './create-interview.component.html',
  styleUrls: ['./create-interview.component.css']
})
export class CreateInterviewComponent implements OnInit {

  private stepper : Stepper;

  constructor() { }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  next() {
    this.stepper.next();
  }
  previous() {
    this.stepper.previous();
  }

}
