import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-job-card',
  host : { class : 'full-component'},
  templateUrl: './config-job-card.component.html',
  styleUrls: ['./config-job-card.component.css']
})
export class ConfigJobCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
