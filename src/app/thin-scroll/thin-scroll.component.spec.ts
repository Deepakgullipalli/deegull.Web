import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinScrollComponent } from './thin-scroll.component';

describe('ThinScrollComponent', () => {
  let component: ThinScrollComponent;
  let fixture: ComponentFixture<ThinScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
