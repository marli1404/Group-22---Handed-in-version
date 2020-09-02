import { Component, OnInit, Input } from '@angular/core';
import { bmwMonth } from '../../booking/booking.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditDeskBookingComponent } from '../../modals/add-edit-desk-booking/add-edit-desk-booking.component';
import { AddEditSlotBookingComponent } from '../../modals/add-edit-slot-booking/add-edit-slot-booking.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  year : number;
  currentMonth : string;
  days: any [] = [];
  userBookings : any [] = []
  constructor(private modal: NgbModal) { }

  calendarInput : bmwMonth;
  @Input() set changeCalendarInput( calendarDate : bmwMonth){
    this.calendarInput = calendarDate;
  }
  @Input()calendarType : string ="individual";

   

  ngOnInit(): void {
   
    this.currentMonth = new Date(this.calendarInput.year , this.calendarInput.month+1 ,0).toLocaleString('default', { month: 'long' });
    this.year = this.calendarInput.year;
    this.constructCalendar();
  }

  constructCalendar(){
    let date = new Date(this.calendarInput.year , this.calendarInput.month);
    let startingDay = new Date(this.calendarInput.year , this.calendarInput.month).getDay();
    let endingDay = new Date(this.calendarInput.year , this.calendarInput.month+1,0).getDate();
    
    let counter = 0;
    this.days = Array(42).fill({date:null, bookingId: null, tableId: null, tableName: null, time: null}).map( (x,i) => {
      
      if( i < startingDay || counter >= endingDay)
        return x;

      else
        counter +=1
        if (counter == 15){
        if( this.calendarType != "individual")
          return {date:counter, bookingId: 2, tableId: 123, tableName: 'xf-22', time:"7:30"};
          else
            return {date:counter, bookingId: 2, tableId: 123, tableName: 'xf-22', time:null};
          }
        return {date:counter, bookingId: null, tableId: null, tableName: null};
    });
  }

  openBookingScreen(booking?:any){
      if(this.calendarType === "individual")
        this.openDeskBooking(booking);
      
      else
        this.openBoardRoomBooking(booking);
  }

  openDeskBooking(booking?:any){

    if(booking){
        const modalInsatnce = this.modal.open(AddEditDeskBookingComponent, { windowClass : "mediumModal"});
        modalInsatnce.componentInstance.booking = booking;
    }
    else{
        const modalInsatnce = this.modal.open(AddEditDeskBookingComponent, { windowClass : "mediumModal"});
    }

  }
  
  openBoardRoomBooking(booking?:any){

    if(booking){
      const modalInsatnce = this.modal.open(AddEditSlotBookingComponent, { windowClass : "largeModal"});
      modalInsatnce.componentInstance.booking = booking;
  }
  else{
      const modalInsatnce = this.modal.open(AddEditSlotBookingComponent, { windowClass : "largeModal"});
  }
  }

  

}