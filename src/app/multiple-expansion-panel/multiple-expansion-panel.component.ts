import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-expansion-panel',
  templateUrl: './multiple-expansion-panel.component.html',
  styleUrls: ['./multiple-expansion-panel.component.scss']
})
export class MultipleExpansionPanelComponent implements OnInit {

  items: TestExpansion[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  addPanel(){
    this.items.push(new TestExpansion());
  }

}

export class TestExpansion{
  Name: string;
  Factor: any;
}
