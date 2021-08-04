import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-new-add-row',
  templateUrl: './new-add-row.component.html',
  styleUrls: ['./new-add-row.component.scss']
})
export class NewAddRowComponent implements OnInit {

  cars: Array<Car>;
  brands: SelectItem[];
  constructor() { }

  ngOnInit(): void {
    this.cars = [];
    this.brands = [
      { label: "Aud", value: "Aud" },
      { label: "BMW", value: "BMW" },
      { label: "Fiat", value: "Fiat" },
      { label: "Ford", value: "Ford" },
      { label: "Honda", value: "Honda" },
      { label: "Jaguar", value: "Jaguar" },
      { label: "Mercedes", value: "Mercedes" },
      { label: "Renault", value: "Renault" },
      { label: "VW", value: "VW" },
      { label: "Volvo", value: "Volvo" }
    ];
  }

  onRowEditCancel(car: Car, index: number) {
    const indexx: number = this.cars.indexOf(car);
    if (indexx !== -1) {
        this.cars.splice(indexx, 1);
    }
  }

  newRow() {
    return { brand: '', color: '', vin: '', year: '', carindex: this.cars.length  };
  }

}

export interface Car {
  vin: string;
  year: string;
  brand: string;
  color: string;
}
