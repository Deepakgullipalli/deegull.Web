import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Address, test2, USERS, USERS_2, User_2 } from '../models/expand-table-element';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent implements OnInit {

  constructor() { }
  // columnsTv = [
  //   { columnDef: 'position', header: 'No.', cell: (element: any) => `${element.position}` },
  //   { columnDef: 'test', header: 'Name', cell: (element: any) => `${element.test.typename}` },
  //   { columnDef: 'weight', header: 'Weight', cell: (element: any) => `${element.weight}` },
  //   { columnDef: 'symbol', header: 'Symbol', cell: (element: any) => `${element.symbol}` },
  // ];
  columnsTv = [
    { field: 'position', header: 'Position'},
    { field: 'test', header: 'Name' },
    { field: 'weight', header: 'Weight' },
    { field: 'symbol', header: 'Symbol' }
  ];
  childcolumnsTv = [
    { field: 'street', header: 'Street' },
    { field: 'zipCode', header: 'ZipCode' },
    { field: 'city', header: 'City' }
  ];
  childTableColumns = ['street', 'zipCode', 'city'];
  elementsTv: User_2[];
  childelementsTv: Address[];
  selectedRow: User_2 = new User_2();
  disabled = false;
  //displayedTableViewColumns = this.columnsTv.map(c => c.columnDef);
  date = new FormControl();
  usersData: User_2[] = [];
  selectedChildRow: Address = new Address();
  enableChildInfo: boolean = false;
  enableChildTable: boolean = false;
  ngOnInit(): void {
    USERS_2.forEach(user => {
      if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
        this.usersData = [...this.usersData, { ...user, child: new MatTableDataSource(user.addresses) }];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.elementsTv = this.usersData;
  }
  SetCardInfo(row: any) {
    // if(row instanceof Address){
    //   this.enableChildInfo = true;
    //   this.selectedChildRow = row;
    // }
    // else if(row instanceof User_2){
      this.enableChildInfo = false;
      this.enableChildTable = false;
      this.selectedRow = row;
      if(row.addresses.length > 0 ){
        this.enableChildTable = true;
        this.childelementsTv = row.addresses;
      }
    //}
    
  }

  SetChildCardInfo(row: any) {
    this.enableChildInfo = true;
    this.selectedChildRow = row;
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
