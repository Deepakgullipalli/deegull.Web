import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Product_Sample } from '../services/product.service';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit {

  products: Product[];

    cols: any[];
    test1: any[];
    test2: any[];
    constructor() { }

    ngOnInit() {
      this.test1 = [{Key: 't1', Value: 't1v'},{Key: 't2', Value: 't2v'}];
      this.test2 = this.test1;
      this.products = Product_Sample;

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' },
            { field: 'inventoryStatus', header: 'Status' },
            { field: 'rating', header: 'Rating' }
        ];
    }
    test(){
      this.test1.splice(1);
    }
    check(){
      console.log(this.test2);
    }
}
