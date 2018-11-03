import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarPropertyComponent } from './similar-property.component';

describe('SimilarPropertyComponent', () => {
  let component: SimilarPropertyComponent;
  let fixture: ComponentFixture<SimilarPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
