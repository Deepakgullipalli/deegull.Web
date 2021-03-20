import { Component, Input, OnInit } from '@angular/core';
import { USERS_2, User_2 } from '../models/expand-table-element';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class PrimeTableComponent implements OnInit {
  cols: any[];
  childcols: any[];
  products: User_2[];
  @Input() columnsTv;
  @Input() childcolumnsTv;
  @Input() elementsTv;
  constructor() { }

  ngOnInit(): void {
    this.products = this.elementsTv;
    this.cols = this.columnsTv;
    this.childcols = this.childcolumnsTv;
  }

}
