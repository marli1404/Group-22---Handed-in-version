import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastsService } from 'src/app/services/toasts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileMComponent } from '../../modals/editProfile/edit-profile-m/edit-profile-m.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notificationToggle : boolean = false;
  hrToggle : boolean = false;
  configToggle : boolean = false;
  auditToggle : boolean = false;
  
  title : String = 'Dashboard-app';
  viewSideBar : Boolean = false;

  constructor(private api : ApiService, private toasts : ToastsService, private modal : NgbModal){ 
  }

  ngOnInit(): void {
    // this.toasts.toasts.push({type:"Error",heading:"Adding user",message:"Could not add the new user to the system"});
    // this.toasts.toasts.push({type:"Success",heading:"Removing User",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"});
  }

  
  public toggleSideBar(){

    this.viewSideBar = !this.viewSideBar;
    
  }

  public testStuff(){
    this.api.getCountries().subscribe( success => console.log(success),error=> this.retreiveError(error) );
  }

  retreiveError(error: any){
    let err = error.error;
    console.log(error);
    console.log(this.toasts.toasts);
    this.toasts.display({type:"Error",heading : err.Title, message : err.message});
  }
  editProfile(){
    const editProfileInstance = this.modal.open(EditProfileMComponent,  { windowClass : "largeModal"});
  }
  

}
