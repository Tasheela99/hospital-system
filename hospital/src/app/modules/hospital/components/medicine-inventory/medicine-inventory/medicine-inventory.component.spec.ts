import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineInventoryComponent } from './medicine-inventory.component';

describe('MedicineInventoryComponent', () => {
  let component: MedicineInventoryComponent;
  let fixture: ComponentFixture<MedicineInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicineInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicineInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
