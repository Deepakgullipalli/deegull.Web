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
    // this.cars = [];
    this.cars = [
      { brand: 'Audi', color: 'Blue', vin: '123', year: '2006' },
      { brand: 'Toyota', color: 'Blue', vin: '345', year: '2012' },
      { brand: 'Honda', color: 'Blue', vin: '567', year: '2019' },
      { brand: 'Honda', color: 'Blue', vin: '890', year: '2008' }
    ].sort((car1, car2) => {
      if (car1.brand > car2.brand) {
        return 1;
      }

      if (car1.brand < car2.brand) {
        return -1;
      }

      return 0;
    });

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
