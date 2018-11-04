import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightPanelComponent } from './copyright-panel.component';

describe('CopyrightPanelComponent', () => {
  let component: CopyrightPanelComponent;
  let fixture: ComponentFixture<CopyrightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyrightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
