import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitOrderComponent } from './limit-order.component';

describe('LimitOrderComponent', () => {
  let component: LimitOrderComponent;
  let fixture: ComponentFixture<LimitOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitOrderComponent]
    });
    fixture = TestBed.createComponent(LimitOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
