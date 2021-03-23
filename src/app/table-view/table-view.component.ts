import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor(private _tableService: TableService) { 
    this.tableInfosubscription = this._tableService.getProfileObs().subscribe(message => { 
      this.columnsTv = message.columns; this.elementsTv = message.elements;
      this.displayTableViewColumns = message.displayCols });
  }
   displayTableViewColumns: string[];
   columnsTv;
   elementsTv;
  displayedColumns: string[] = ['modification'];
  columns: any;
  tableElements: any;
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(false, []);
  @Output() onTableRowSelected = new EventEmitter<any>();
  tableInfosubscription: Subscription;
  ngOnInit(): void {
    this.displayTableViewColumns.push('comments')
    this.getColumns().then((cols:string[])=>{
      this.displayedColumns.push(...cols);
    })
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
  getColumns(){
    return new Promise((resolve,reject)=>{
      resolve(this.displayTableViewColumns);
    })
  }
}




