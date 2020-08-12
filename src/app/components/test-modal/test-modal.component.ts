import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {

  @Input()test :string;
  constructor() { }

  ngOnInit(): void {
  }
  testClick(){
    alert(this.test);
  }

}
