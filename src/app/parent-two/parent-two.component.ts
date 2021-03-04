import { Component, OnInit } from '@angular/core';
import { ElementTwo, ELEMENT_DATA_2 } from '../models/table-view-element';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.scss']
})
export class ParentTwoComponent implements OnInit {

  constructor() { }
  columnsTv = [
    { columnDef: 'department', header: 'Department', cell: (element: any) => `${element.department}` },
    { columnDef: 'abbreviation', header: 'Acronym', cell: (element: any) => `${element.abbreviation}` },
  ];
  elementsTv = ELEMENT_DATA_2;
  displayedTableViewColumns = this.columnsTv.map(c => c.columnDef);
  selectedRow: ElementTwo;
  ngOnInit(): void {
  }
  SetCardInfo(row: any){
    this.selectedRow = row;
  }

}
