import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditTableComponent } from '../../modals/edit-table/edit-table.component';

@Component({
  selector: 'app-table',
  host : { class : 'full-component'},
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private modal : NgbModal) { }

  ngOnInit(): void {
  }

  editTable(){
    const modalInstance = this.modal.open(EditTableComponent);
  }

}
