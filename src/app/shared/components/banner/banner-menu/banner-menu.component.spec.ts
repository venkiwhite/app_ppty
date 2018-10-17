import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMenuComponent } from './banner-menu.component';

describe('BannerMenuComponent', () => {
  let component: BannerMenuComponent;
  let fixture: ComponentFixture<BannerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
