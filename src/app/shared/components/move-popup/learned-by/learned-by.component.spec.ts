import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnedByComponent } from './learned-by.component';

describe('LearnedByComponent', () => {
  let component: LearnedByComponent;
  let fixture: ComponentFixture<LearnedByComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnedByComponent]
    });
    fixture = TestBed.createComponent(LearnedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
