import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard-app';

  viewSideBar = false;
  
  public toggleSideBar(){

    this.viewSideBar = !this.viewSideBar;
  }
}
