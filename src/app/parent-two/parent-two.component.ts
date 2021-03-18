import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Address_2, USERS_3, User_3 } from '../models/expand-table-element';

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
  childTableColumns = ['newstreet', 'newzipCode', ];
  elementsTv: any;
  disabled = false;
  selectedRow: User_3= new User_3();
  displayedTableViewColumns = this.columnsTv.map(c => c.columnDef);
  usersData: User_3[] = [];
  selectedChildRow: Address_2 = new Address_2();
  enableChildInfo: boolean = false;
  
  ngOnInit(): void {
    USERS_3.forEach(user => {
      if (user.newaddresses && Array.isArray(user.newaddresses) && user.newaddresses.length) {
        this.usersData = [...this.usersData, {...user, child: new MatTableDataSource(user.newaddresses)}];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.elementsTv = this.usersData;
  }
  SetCardInfo(row: any) {
    this.enableChildInfo = false;
    this.selectedRow = row;
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
