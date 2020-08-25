import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-approver-card',
  templateUrl: './approver-card.component.html',
  styleUrls: ['./approver-card.component.css']
})
export class ApproverCardComponent implements OnInit {

  @Input() accepted : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
