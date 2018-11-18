import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhkUnitsComponent } from './bhk-units.component';

describe('BhkUnitsComponent', () => {
  let component: BhkUnitsComponent;
  let fixture: ComponentFixture<BhkUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhkUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhkUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
