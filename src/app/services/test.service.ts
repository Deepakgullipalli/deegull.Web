import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  postId: number
  constructor(private http: HttpClient) { }

  DummyReturnMethod() {
    this.DummyService2Method().subscribe(data => {      
      this.postId = data.id;
    });
    return this.postId;
  }

  DummyServiceMethod() {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' });
  }

  DummyService2Method() {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' });
  }
  
  private subject = new Subject<any>();

  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

}
