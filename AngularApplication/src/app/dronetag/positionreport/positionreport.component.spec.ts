import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionreportComponent } from './positionreport.component';

describe('PositionreportComponent', () => {
  let component: PositionreportComponent;
  let fixture: ComponentFixture<PositionreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
