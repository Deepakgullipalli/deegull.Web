import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.DummyMethod();
  }

  DummyMethod(){
    const testHeaders = "Authorization: Baisc kwhwfgwloppllwemfww=";

    let testPostId = this.testService.DummyServiceMethod();


    const testNextLine = "kshkdj";
  }



}
