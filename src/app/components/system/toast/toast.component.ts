import { Component, OnInit } from '@angular/core';
import { ToastsService } from 'src/app/services/toasts.service';
import { Toast } from '../../../models/toast';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor( public toasts : ToastsService) { }


  ngOnInit(): void {

  }

}
