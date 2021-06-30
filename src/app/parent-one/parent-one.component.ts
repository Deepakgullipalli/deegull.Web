import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Address, test2, USERS, USERS_2, User_2 } from '../models/expand-table-element';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from '../services/table.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SelectItem } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';

export enum Colors {
  RED = <any>"RED COLOR",
  BLUE = <any>"BLUE COLOR",
  GREEN = <any>"GREEN COLOR"
}
@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent implements OnInit {

  constructor(private _tableService: TableService,private http: HttpClient) { }
  // columnsTv = [
  //   { columnDef: 'position', header: 'No.', cell: (element: any) => `${element.position}` },
  //   { columnDef: 'test', header: 'Name', cell: (element: any) => `${element.test.typename}` },
  //   { columnDef: 'weight', header: 'Weight', cell: (element: any) => `${element.weight}` },
  //   { columnDef: 'symbol', header: 'Symbol', cell: (element: any) => `${element.symbol}` },
  // ];
  private heroesUrl = 'api/heroes'; 
  natures: SelectItem[];
  result;
  columnsTv = [
    { field: 'position', header: 'Position' },
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
  enableTable: boolean = true;
  enableObs: boolean = false;
  myHeores: any;
  selectedCountry: Country;
  countries: any;
  ngOnInit(): void {
    let enumKey = Colors["BLUE COLOR"];
    console.log(enumKey);
    this.selectedCountry = {name: 'China', code: 'CN'};
    this.countries = [
      {name: 'Australia', code: 'AU', cd: 'sdb'},
      {name: 'Brazil', code: 'BR', cd: 'sdb'},
      {name: 'China', code: 'CN', cd: 'sdb'},
      {name: 'Egypt', code: 'EG', cd: 'sdb'},
      {name: 'France', code: 'FR', cd: 'sdb'},
      {name: 'Germany', code: 'DE', cd: 'sdb'},
      {name: 'India', code: 'IN', cd: 'sdb'},
      {name: 'Japan', code: 'JP', cd: 'sdb'},
      {name: 'Spain', code: 'ES', cd: 'sdb'},
      {name: 'United States', code: 'US', cd: 'sdb'}
  ];

  for (let i = 0; i < 5; i++) {
    this.countries = this.countries.concat(this.countries);
  }
    
    this.natures=Object.keys(Fruit).map(key => ({ label: Fruit[key], value: key }));

    USERS_2.forEach(user => {
      if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
        this.usersData = [...this.usersData, { ...user, child: new MatTableDataSource(user.addresses) }];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.elementsTv = this.usersData;

    // this._tableService.setProfileObs({
    //   columns: this.columnsTv, elements: this.elementsTv,

    //   displayCols: this.displayedTableViewColumns
    // })
    this.enableTable = true;
    this.getTestData();

  }
  SetCardInfo(row: any) {
    this.enableChildInfo = false;
    this.enableChildTable = false;
    this.selectedRow = row;
    if (row.addresses.length > 0) {
      this.enableChildTable = true;
      this.childelementsTv = row.addresses;
    }

  }

  SetChildCardInfo(event: any) {
    this.enableChildInfo = true;
    this.selectedChildRow = event.data;
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

  getTestData() {
    this.getHeroes().subscribe((res) => {
      let info = res;
      this.myHeores = info;
      this.enableObs = true;
    });
  }

  getServiceData(): Observable<string> {
    var test = of("Test 2");
    setTimeout(() => {
      test = of("Test 1");
    }, 3000);
    return test;
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

}

export class Hero{
  id: string;
  name: string;
}

export enum Fruit{
  annuelle="Annuelle",
        semestrielle="Semestrielle",
        trimestrielle="Trimestrielle"
}

export interface Country {
  name: string,
  code: string
}

