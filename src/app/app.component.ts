import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleComponent } from './dialog-content-example/dialog-content-example.component'
import { TestService } from './services/test.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestNgbdModalContentComponent } from './test-ngbd-modal-content/test-ngbd-modal-content.component';
import { process } from '@progress/kendo-data-query';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import {MatExpansionModule} from '@angular/material/expansion';
import { Task, products } from './models/task';
import { Element, ELEMENT_DATA} from '../app/models/table-view-element';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 10rem;
      }

      p {
          margin: 0;
      }

      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
  `]
})
export class AppComponent {
    @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
    //public gridView: any[];
    
    money = 1824523;
    public mySelection: string[] = [];
    public options: string[] = ["10", "20", "50"];
    
    selectedQuantity = "10";
    public apiOptions: number[] = [1,2,3];
    public drpOptions: string[] = [];
    public multiple = false;
    public allowUnsort = true;
    task: Task = {
        name: 'Indeterminate',
        completed: false,
        subtasks: [
          {name: 'Primary', completed: false},
          {name: 'Accent', completed: false},
          {name: 'Warn', completed: false}
        ]
      };
    public sort: SortDescriptor[] = [{
      field: 'ProductName',
      dir: 'asc'
    }];
    public gridView: GridDataResult;
    public products: any[] = products;
    panelOpenState = false;
    constructor(private primengConfig: PrimeNGConfig, public dialog: MatDialog,
        private testService: TestService, private modalService: NgbModal) {
            this.loadProducts();
         }

    ngOnInit() {
        this.primengConfig.ripple = true;
        //this.gridView = this.gridData;
        this.generateDropDownList();
    }

    generateDropDownList(){
        this.apiOptions.forEach(element => {
            if(element == 1){
                this.drpOptions.push("xyz");
                this.selectedQuantity = "xyz"
            }
            if(element == 2){
                this.drpOptions.push("abc");
            }
            if(element == 3){
                this.drpOptions.push("pqr");
            }
        });
    }

    allComplete: boolean = false;

    

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.products, this.sort),
            total: this.products.length
        };
    }

    isCheck: boolean = false;

    isChecked(event) {
        this.isCheck = event.target.checked;
    }

    openDialog() {
        const dialogRef = this.dialog.open(DialogContentExampleComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    OnCommentsClick(){
        this.open();
        this.testService.sendMessage("TestId");
    }

    open() {
        const modalRef = this.modalService.open(TestNgbdModalContentComponent);
        modalRef.componentInstance.name = 'Deepak';
    }

    
}

/* tslint:disable:whitespace */
/* tslint:disable:max-line-length */


