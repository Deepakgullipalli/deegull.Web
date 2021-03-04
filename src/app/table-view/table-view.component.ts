import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor() { }
  @Input() displayTableViewColumns;
  @Input() columnsTv;
  @Input() elementsTv;
  displayedColumns: any;
  columns: any;
  tableElements: Element[];
  dataSource:MatTableDataSource<Element>;
  ngOnInit(): void {
    this.displayedColumns = this.displayTableViewColumns;
    this.columns = this.columnsTv;
    this.tableElements = this.elementsTv;
    this.dataSource = new MatTableDataSource(this.tableElements);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}




