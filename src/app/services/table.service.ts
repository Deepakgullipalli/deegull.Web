import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
  private subject = new Subject<any>();

  public sendTableInfo(tableInfo: any) {
      this.subject.next({ columns: tableInfo.columns, elements: tableInfo.elements,
      displayCols: tableInfo.displayCols });
  }

  clearMessage() {
      this.subject.next();
  }

  getTableInfo(): Observable<any> {
      return this.subject.asObservable();
  }
}
