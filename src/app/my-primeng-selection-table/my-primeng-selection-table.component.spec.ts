import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrimengSelectionTableComponent } from './my-primeng-selection-table.component';

describe('MyPrimengSelectionTableComponent', () => {
  let component: MyPrimengSelectionTableComponent;
  let fixture: ComponentFixture<MyPrimengSelectionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPrimengSelectionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPrimengSelectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
