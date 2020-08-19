import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-widget',
  host: {class:'full-component'},
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.css']
})
export class ProfileWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
