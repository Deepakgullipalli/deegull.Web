import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA_2 } from '../models/table-view-element';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.scss']
})
export class ParentTwoComponent implements OnInit {

  constructor() { }
  columnsTv = [
    { columnDef: 'position', header: 'No.2', cell: (element: any) => `${element.position}` },
    { columnDef: 'name', header: 'Name2', cell: (element: any) => `${element.name}` },
    { columnDef: 'symbol', header: 'Symbol2', cell: (element: any) => `${element.symbol}` },
  ];
  elementsTv = ELEMENT_DATA_2;
  displayedTableViewColumns = this.columnsTv.map(c => c.columnDef);
  ngOnInit(): void {
  }

}
