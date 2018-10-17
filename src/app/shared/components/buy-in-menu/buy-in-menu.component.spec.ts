import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyInMenuComponent } from './buy-in-menu.component';

describe('BuyInMenuComponent', () => {
  let component: BuyInMenuComponent;
  let fixture: ComponentFixture<BuyInMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyInMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyInMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
