import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-desk-booking',
  templateUrl: './add-edit-desk-booking.component.html',
  styleUrls: ['./add-edit-desk-booking.component.css']
})
export class AddEditDeskBookingComponent implements OnInit {

  @Input()booking = null;
  constructor() { }

  ngOnInit(): void {
  }

}
