import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pop-up',
  templateUrl: './modal-pop-up.component.html',
  styleUrls: ['./modal-pop-up.component.scss']
})
export class ModalPopUpComponent implements OnInit {

  displayPosition: boolean;
  position: string;
  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}

showModalDialog() {
  this.displayModal = true;
}

showBasicDialog() {
  this.displayBasic = true;
}
showBasicDialog2() {
  this.displayBasic2 = true;
}

showMaximizableDialog() {
  this.displayMaximizable = true;
}

}
