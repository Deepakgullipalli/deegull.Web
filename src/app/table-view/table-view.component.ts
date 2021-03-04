import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  tableElements: any;
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(false, []);
  @Output() onTableRowSelected = new EventEmitter<any>();
  ngOnInit(): void {
    this.displayedColumns = this.displayTableViewColumns;
    this.columns = this.columnsTv;
    this.tableElements = this.elementsTv;
    this.dataSource = new MatTableDataSource(this.tableElements);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  OnTableRowSelection(row: any) {
    this.onTableRowSelected.emit(row);
  }
}




