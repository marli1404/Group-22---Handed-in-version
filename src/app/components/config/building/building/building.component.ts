import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddLocationComponent } from '../../modals/edit-add-location/edit-add-location.component';
import { EditAddBuildingComponent } from '../../modals/edit-add-building/edit-add-building.component';
import { EditAddFloorComponent } from '../../modals/edit-add-floor/edit-add-floor.component';

@Component({
  selector: 'app-building',
  host: {class:'full-component'},
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  addLocation(){
    const modalInstance = this.modal.open(EditAddLocationComponent);
  }
  addBuilding(){
    const modalInstance = this.modal.open(EditAddBuildingComponent);
  }

  addFloor(){
    const modalInstance = this.modal.open(EditAddFloorComponent);
  }
}
