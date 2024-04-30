import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicedComponent } from './invoiced.component';

describe('InvoicedComponent', () => {
  let component: InvoicedComponent;
  let fixture: ComponentFixture<InvoicedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoicedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
