import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
   host: {class:'full-component'},
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() removable : boolean = false;
  @Input() addable : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
