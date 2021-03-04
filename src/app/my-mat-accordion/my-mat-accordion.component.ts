import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-mat-accordion',
  templateUrl: './my-mat-accordion.component.html',
  styleUrls: ['./my-mat-accordion.component.scss']
})
export class MyMatAccordionComponent implements OnInit {

  public dummyTasks: string[] = ["Primary", "Accent", "Warn", "Primary", "Accent", "Warn",
    "Primary", "Accent", "Warn", "Primary", "Accent", "Warn"];
  taskName: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  updateAllComplete(event) {
    let test = event.target.value;
    //   this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

}
