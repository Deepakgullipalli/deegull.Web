import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api/selectitem';
import { Product, ProductService } from '../services/product.service';
import { Product_Sample} from '../services/product.service';
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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products1 = Product_Sample
      //this.productService.getProductsSmall().then(data => this.products2 = data);

      this.statuses = [{label: 'In Stock', value: 'INSTOCK'},{label: 'Low Stock', value: 'LOWSTOCK'},{label: 'Out of Stock', value: 'OUTOFSTOCK'}]
  }

  onRowEditInit(product: Product) {
      this.clonedProducts[product.id] = {...product};
  }

  onRowEditSave(product: Product) {
      if (product.price > 0) {
          delete this.clonedProducts[product.id];
          //this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
      }  
      else {
          //this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
      }
  }

  onRowEditCancel(product: Product, index: number) {
      this.products2[index] = this.clonedProducts[product.id];
      delete this.products2[product.id];
  }

}



