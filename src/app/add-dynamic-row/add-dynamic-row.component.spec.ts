import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDynamicRowComponent } from './add-dynamic-row.component';

describe('AddDynamicRowComponent', () => {
  let component: AddDynamicRowComponent;
  let fixture: ComponentFixture<AddDynamicRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDynamicRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDynamicRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
