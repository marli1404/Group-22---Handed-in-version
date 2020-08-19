import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  host: {class:'full-component'},
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

  @Input() owner : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
