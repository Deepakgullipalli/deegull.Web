import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api/selectitem';
import { Table } from 'primeng/table';
import { Product, ProductService } from '../services/product.service';
import { Product_Sample } from '../services/product.service';
@Component({
  selector: 'app-add-dynamic-row',
  templateUrl: './add-dynamic-row.component.html',
  styleUrls: ['./add-dynamic-row.component.scss']
})
export class AddDynamicRowComponent implements OnInit {

  products1: Product[];

  products2: Product[];

  statuses: SelectItem[];

  clonedProducts: { [s: string]: Product; } = {};

  myObject = {} as Product;

  cars: Array<Car>;
  brands: SelectItem[];
  clonedCars: { [s: string]: Car } = {};
  caritem = {} as Car;
  dt: Table;
  @ViewChild('dt') public dataTable: Table;
  public shapeValues: Car[] = [{brand: "", color: "", vin: "", year: ""}];
    cities: any;
  // statuses: SelectItem[];
  // cars: Array<Car>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.products1 = Product_Sample
    // this.productService.getProductsSmall().then(data => this.products2 = data);

    // this.statuses = [{ label: 'In Stock', value: 'INSTOCK' }, { label: 'Low Stock', value: 'LOWSTOCK' }, { label: 'Out of Stock', value: 'OUTOFSTOCK' }]
    //this.cars = [{ brand: "", color: "", vin: "", year: "", carindex: 0 }];
    
    this.cities = ["Paris", "Marseille", "Nice"];
    // this.cars = [{ brand: "", color: "", vin: "", year: ""}];
    this.cars = [];
    //this.dt.initRowEdit(this.cars[0]);
    //this.newRow();
    //this.onRowEditInit(this.cars[0]);
    // this.cars = [
    //   { brand: "Audi", color: "Blue", vin: "123", year: "2006", dKey: "1" },
    //   { brand: "Toyota", color: "Blue", vin: "345", year: "2012" , dKey: "1"},
    //   { brand: "Honda", color: "Blue", vin: "567", year: "2019" , dKey: "1"},
    //   { brand: "Honda", color: "Blue", vin: "890", year: "2008", dKey: "1" }
    // ].sort((car1, car2) => {
    //   if (car1.brand > car2.brand) {
    //     return 1;
    //   }

    //   if (car1.brand < car2.brand) {
    //     return -1;
    //   }

    //   return 0;
    // });

    this.brands = [
      { label: "Audi", value: "Audi" },
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

  // onRowEditInit(product: Product) {
  //   this.clonedProducts[product.id] = { ...product };
  // }

  // onRowEditSave(product: Product) {
  //   if (product.price > 0) {
  //     delete this.clonedProducts[product.id];
  //     //this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
  //   }
  //   else {
  //     //this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
  //   }
  // }

  // onRowEditCancel(product: Product, index: number) {
  //   this.products2[index] = this.clonedProducts[product.id];
  //   delete this.products2[product.id];
  // }

  // onRowAdd() {
  //   this.products1.push(this.myObject);
  // }

  // newRow(){
  //   return this.myObject;
  // }


  onRowEditInit(car: Car) {
    //this.clonedCars[car.carindex] = { ...car };
  }

  onRowEditSave(car: Car) {
    //delete this.clonedCars[car.carindex];
  }

  onRowEditCancel(car: Car, index: number) {
    // this.cars[index] = this.clonedCars[car.carindex];
    // delete this.clonedCars[car.carindex];
    const indexx: number = this.cars.indexOf(car);
    if (indexx !== -1) {
        this.cars.splice(indexx, 1);
    }
    // if (this.cars.length > 1) {
    //   this.cars.forEach((value, index) => {
    //     this.cars.splice(index, 1);
    //   });
    // }
  }

  newRow() {
    return { brand: '', color: '', vin: '', year: '', carindex: this.cars.length  };
  }

  addShape(value1: string, value2: string, value3: string, value4: string){
    this.shapeValues.push({brand: value1, color: value2, vin:value3, year:value4});
  }

  removeShape(value: any) {
    const index = this.shapeValues.indexOf(value);
    if(index !== -1) {
      this.shapeValues.splice(index, 1);
    }
  }

  onChange(deviceValue, sv : Car) {
    sv.vin = deviceValue;
  }
}

export interface Car {
  vin: string;
  year: string;
  brand: string;
  color: string;
  //carindex: number;
}



