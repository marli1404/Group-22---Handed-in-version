import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddStageComponent } from '../../modals/edit-add-stage/edit-add-stage.component';
import { EditAddTestComponent } from '../../modals/edit-add-test/edit-add-test.component';

@Component({
  selector: 'app-config-job-card',
  host : { class : 'full-component'},
  templateUrl: './config-job-card.component.html',
  styleUrls: ['./config-job-card.component.css']
})
export class ConfigJobCardComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  addStage(){
    const modalInstance = this.modal.open(EditAddStageComponent);
  }

  addTest(){
    const modalInstance = this.modal.open(EditAddTestComponent);
  }

 

}
