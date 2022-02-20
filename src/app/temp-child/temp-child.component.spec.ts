import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempChildComponent } from './temp-child.component';

describe('TempChildComponent', () => {
  let component: TempChildComponent;
  let fixture: ComponentFixture<TempChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
