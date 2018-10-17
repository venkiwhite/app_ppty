import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWindowComponent } from './banner-window.component';

describe('BannerWindowComponent', () => {
  let component: BannerWindowComponent;
  let fixture: ComponentFixture<BannerWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
