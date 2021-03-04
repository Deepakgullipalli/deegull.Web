import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test-ngbd-modal-content',
  templateUrl: './test-ngbd-modal-content.component.html',
  styleUrls: ['./test-ngbd-modal-content.component.scss']
})
export class TestNgbdModalContentComponent implements OnInit {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.myTest();
  }

  myTest(){
    let test = "adf";
  }

}
