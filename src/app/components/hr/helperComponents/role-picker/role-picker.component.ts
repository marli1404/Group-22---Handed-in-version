import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleAdderComponent } from '../../modals/role-adder/role-adder.component';

@Component({
  selector: 'app-role-picker',
  templateUrl: './role-picker.component.html',
  styleUrls: ['./role-picker.component.css']
})
export class RolePickerComponent implements OnInit {

  constructor(private modal : NgbModal) { }

  ngOnInit(): void {
  }

  openRoleAdder(){
    const modalInstance = this.modal.open(RoleAdderComponent, {windowClass : "mediumModal"});
  }

}
