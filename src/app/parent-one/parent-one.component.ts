import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA, Element } from '../models/table-view-element';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent implements OnInit {

  constructor() { }
  columnsTv = [
    { columnDef: 'position', header: 'No.', cell: (element: any) => `${element.position}` },
    { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}` },
    { columnDef: 'weight', header: 'Weight', cell: (element: any) => `${element.weight}` },
    { columnDef: 'symbol', header: 'Symbol', cell: (element: any) => `${element.symbol}` },
  ];
  elementsTv: any;
  selectedRow: Element = new Element();
  showFiller = false;
  disabled = false;
  displayedTableViewColumns = this.columnsTv.map(c => c.columnDef);
  date = new FormControl(new Date());
  ngOnInit(): void {
    this.elementsTv = ELEMENT_DATA;
  }
  SetCardInfo(row: any){
    this.selectedRow = row;
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
