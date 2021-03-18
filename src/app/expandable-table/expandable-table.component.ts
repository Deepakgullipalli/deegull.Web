import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ExpandableTableComponent implements OnInit {
  @Input() displayTableViewColumns: string[];
  @Input() columnsTv;
  @Input() elementsTv;
  @Input() childTableColumns;
  displayedColumns: string[] = ['modification'];
  columns: any;
  innerDisplayedColumns: any;
  tableElements: any;
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(false, []);
  expandedElement: any | null;

  @Output() onTableRowSelected = new EventEmitter<any>();
  @Output() onChildTableRowSelected = new EventEmitter<any>();
  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<any>>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChildren(MatPaginator) paginator1: QueryList<MatPaginator>;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.displayTableViewColumns.push('comments');
    this.innerDisplayedColumns = this.childTableColumns;
    this.getColumns().then((cols: string[]) => {
      this.displayedColumns.push(...cols);
    })
    this.columns = this.columnsTv;
    this.tableElements = this.elementsTv;
    this.dataSource = new MatTableDataSource(this.tableElements);
  }

  toggleRow(element: any) {
    this.onTableRowSelected.emit(element);
    element.child && (element.child as MatTableDataSource<any>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => {
      (table.dataSource as MatTableDataSource<any>).paginator = this.paginator1.toArray()[index],
        (table.dataSource as MatTableDataSource<any>).sort = this.innerSort.toArray()[index]
    });
  }
  innertoggleRow(element: any) {
    this.onChildTableRowSelected.emit(element);
  }
  applyFilter(filterValue: string) {
    //this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Address>).filter = filterValue.trim().toLowerCase());
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getColumns() {
    return new Promise((resolve, reject) => {
      resolve(this.displayTableViewColumns);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

