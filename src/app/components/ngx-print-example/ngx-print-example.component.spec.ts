import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrintExampleComponent } from './ngx-print-example.component';

describe('NgxPrintExampleComponent', () => {
  let component: NgxPrintExampleComponent;
  let fixture: ComponentFixture<NgxPrintExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPrintExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxPrintExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
