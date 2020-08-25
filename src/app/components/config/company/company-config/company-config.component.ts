import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddDivisionComponent } from '../../modals/edit-add-division/edit-add-division.component';
import { EditAddDepartmentComponent } from '../../modals/edit-add-department/edit-add-department.component';

@Component({
  selector: 'app-company-config',
  host : { class : 'full-component'},
  templateUrl: './company-config.component.html',
  styleUrls: ['./company-config.component.css']
})
export class CompanyConfigComponent implements OnInit {

  constructor( private modal : NgbModal) { }

  ngOnInit(): void {
  }

  addDivision(){
    const modalInstance = this.modal.open(EditAddDivisionComponent);
  }
  addDepartment(){
    const modalInstance = this.modal.open(EditAddDepartmentComponent);
  }


}
