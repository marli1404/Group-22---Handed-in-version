import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JobRequestInfo } from 'src/app/models/jobReqDetails';
import { ToastsService } from 'src/app/services/toasts.service';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reject-request',
  templateUrl: './reject-request.component.html',
  styleUrls: ['./reject-request.component.css']
})
export class RejectRequestComponent implements OnInit {

  @Input() jobRequest : JobRequestInfo;

  constructor( public modal : NgbActiveModal, private toast : ToastsService, private api : ApiService, private formBuilder : FormBuilder) { }

  rejectForm : FormGroup;
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.rejectForm = this.formBuilder.group({
      rejectionMessage : ['',[Validators.required]]
    });
  }

  getFormDetails(){

    return {
      jrequestId : this.jobRequest.id,
      message : this.rejectForm.get('rejectionMessage').value
    }
  }

  save(){
    alert('ADD');
  }


}
