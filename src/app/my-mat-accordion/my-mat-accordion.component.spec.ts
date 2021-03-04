import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatAccordionComponent } from './my-mat-accordion.component';

describe('MyMatAccordionComponent', () => {
  let component: MyMatAccordionComponent;
  let fixture: ComponentFixture<MyMatAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMatAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMatAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
