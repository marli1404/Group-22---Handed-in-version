import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  //Used to display the remove button
  @Input()removable : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
