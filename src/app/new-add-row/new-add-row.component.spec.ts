import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddRowComponent } from './new-add-row.component';

describe('NewAddRowComponent', () => {
  let component: NewAddRowComponent;
  let fixture: ComponentFixture<NewAddRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAddRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAddRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
