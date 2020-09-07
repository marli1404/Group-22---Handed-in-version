import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastsService } from 'src/app/services/toasts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileMComponent } from '../../modals/editProfile/edit-profile-m/edit-profile-m.component';
import { AuthService } from 'src/app/services/auth.service';
import { View } from 'src/app/models/view';
import { userCard } from 'src/app/models/userCard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notificationToggle : boolean = false;
  managerToggle : boolean = false;
  hrToggle : boolean = false;
  configToggle : boolean = false;
  auditToggle : boolean = false;
  userProfileCard : userCard;
  views : View [] = [];
  
  title : String = 'Dashboard-app';
  viewSideBar : Boolean = false;

  constructor(private api : ApiService, private toasts : ToastsService, private modal : NgbModal,private auth: AuthService){ 
  }

  ngOnInit(): void {
    this.views = this.auth.getViews();
    this.initLoading();
  }
  logout(){
      this.auth.logOut();
  }
  
  public toggleSideBar(){

    this.viewSideBar = !this.viewSideBar;
    
  }

  retreiveError(error: any){
    let err = error.error;
    this.toasts.display({type:"Error",heading : err.Title, message : err.message});
  }
  editProfile(){
    const editProfileInstance = this.modal.open(EditProfileMComponent,  { windowClass : "largeModal",backdrop:"static" });
    editProfileInstance.result.then((res) =>{

      console.log(res);
      if(res)
      {
        
        this.userProfileCard.imgUrl = res.imgUrl;
        this.userProfileCard.userName = res.name;
        this.userProfileCard.userSurname = res.surname;
      }
      
    });
  }

  searchView(viewName : string){

    if( this.views.filter(el => el.view === viewName).length > 0)
      return true;
    
    else
      return false;
  }

  initLoading(){
    this.api.getUserProfileLite(this.auth.getUserId()).subscribe( 
      success => this.getUserCardSuccess(success),
      failure => this.getUserCardFailed(failure)
    );
  }

  getUserCardSuccess(userInfo : userCard){
    this.userProfileCard = userInfo;
  }
  getUserCardFailed(error : any){
    console.log(error);
    const servError = error.error;
    this.toasts.display({type:"Error",heading: servError.Title, message : servError.message + "\n" +error.message});
  }
  

}
