import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleExpansionPanelComponent } from './multiple-expansion-panel.component';

describe('MultipleExpansionPanelComponent', () => {
  let component: MultipleExpansionPanelComponent;
  let fixture: ComponentFixture<MultipleExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
