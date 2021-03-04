import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgbdModalContentComponent } from './test-ngbd-modal-content.component';

describe('TestNgbdModalContentComponent', () => {
  let component: TestNgbdModalContentComponent;
  let fixture: ComponentFixture<TestNgbdModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgbdModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgbdModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
