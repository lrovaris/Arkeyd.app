import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoistComponent } from './depoist.component';

describe('DepoistComponent', () => {
  let component: DepoistComponent;
  let fixture: ComponentFixture<DepoistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepoistComponent]
    });
    fixture = TestBed.createComponent(DepoistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
