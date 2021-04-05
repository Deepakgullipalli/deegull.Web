import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { USERS_2, User_2 } from '../models/expand-table-element';

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.scss']
})
export class PrimeTableComponent implements OnInit {
  cols: any[];
  products: User_2[];
  @Input() columnsTv;
  @Input() elementsTv;
  @Output() onTableRowSelected = new EventEmitter<any>();
  @Output() onChildTableRowSelected = new EventEmitter<any>();
  selectedProduct: User_2;
  showSelectedItems: boolean= false;
  selectedItems: User_2[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = this.elementsTv;
    this.cols = this.columnsTv;
  }
  // onRowSelect(event) {
  //   this.onTableRowSelected.emit(event.data);
  // }
  
  ngOnChanges(){
    this.products = this.elementsTv;
    this.cols = this.columnsTv;
  }

  addProduct(product: User_2){
    this.selectedProduct = {...product};
    this.selectedItems.push(this.selectedProduct);
    if(this.selectedItems.length > 0){
      this.showSelectedItems = true;
    }
  }

  removeProduct(product: User_2){
    this.selectedProduct = {...product};
    this.selectedItems = this.selectedItems.filter(val => val.name !== product.name);
    this.showSelectedItems = this.selectedItems.length > 0 ? true : false;
  }
}
