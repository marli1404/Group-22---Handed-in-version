import { Component, OnInit, Input } from '@angular/core';
import { userCard } from 'src/app/models/userCard';

@Component({
  selector: 'app-profile-card',
   host: {class:'full-component'},
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() removable : boolean = false;
  @Input() addable : boolean = false;

  userDetails : userCard;
  @Input()set cardDetails(userInfo : userCard){
    this.userDetails = userInfo;
    this.imgChecker();
  }
  constructor() { }

  ngOnInit(): void {
  }


  imgChecker(){
    if(!this.userDetails){
      this.userDetails = new userCard;
      this.userDetails.imgUrl = "../../../../../assets/profile/empty.png";
    }
      
    else if(this.userDetails.imgUrl==null){
      this.userDetails.imgUrl = "../../../../../assets/profile/empty.png";
    } 

  }

}
