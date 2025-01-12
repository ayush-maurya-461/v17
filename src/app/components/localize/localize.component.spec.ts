import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizeComponent } from './localize.component';

describe('LocalizeComponent', () => {
  let component: LocalizeComponent;
  let fixture: ComponentFixture<LocalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
