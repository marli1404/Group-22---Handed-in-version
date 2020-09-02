import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-slot-booking',
  templateUrl: './add-edit-slot-booking.component.html',
  styleUrls: ['./add-edit-slot-booking.component.css']
})
export class AddEditSlotBookingComponent implements OnInit {

  @Input()booking : any = null;


  boardRooms : any [] = []

  constructor() { }

  ngOnInit(): void {
    this.boardRooms.push({id:null,name:"All"});
    this.boardRooms.push({id:1,name:"ZF 2"});
    this.boardRooms.push({id:2,name:"ZF 3"});
  }

}
