import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  host: {class:'full-component'},
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
