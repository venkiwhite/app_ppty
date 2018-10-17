import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsGroupComponent } from './testimonials-group.component';

describe('TestimonialsGroupComponent', () => {
  let component: TestimonialsGroupComponent;
  let fixture: ComponentFixture<TestimonialsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
