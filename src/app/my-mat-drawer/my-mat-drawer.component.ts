import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-mat-drawer',
  templateUrl: './my-mat-drawer.component.html',
  styleUrls: ['./my-mat-drawer.component.scss']
})
export class MyMatDrawerComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
