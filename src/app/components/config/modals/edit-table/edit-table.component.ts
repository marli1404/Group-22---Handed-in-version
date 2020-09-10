import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsService } from 'src/app/services/toasts.service';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal, private toast : ToastsService, private api : ApiService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

}
