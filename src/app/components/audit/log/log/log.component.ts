import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  host: {class:'full-component'},
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
