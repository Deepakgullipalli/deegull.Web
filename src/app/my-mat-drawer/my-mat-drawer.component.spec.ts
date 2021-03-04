import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatDrawerComponent } from './my-mat-drawer.component';

describe('MyMatDrawerComponent', () => {
  let component: MyMatDrawerComponent;
  let fixture: ComponentFixture<MyMatDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMatDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMatDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
