import {Component, OnInit} from '@angular/core';
import {MedicineService} from "../../../shared/services/medicine.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.scss'
})
export class MedicineComponent implements OnInit{

  ngOnInit() {
    this.getAllMedicine();
  }

  displayedColumns: string[] = ['index', 'name', 'type', 'qty', 'unitPrice', 'actions'];

  medicines: object[] = [];

  selectedDoctor: any;

  isUpdating = false;

  constructor(private medicineService: MedicineService) {
  }


  medicineForm = new FormGroup({
    inventoryId: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    type: new FormControl("", Validators.required),
    qty: new FormControl("", Validators.required),
    unitPrice: new FormControl("", Validators.required),
  });

  createMedicine() {
    this.medicineService
      .createMedicine(
        this.medicineForm.get('inventoryId')?.value,
        this.medicineForm.get('name')?.value,
        this.medicineForm.get('type')?.value,
        this.medicineForm.get('qty')?.value,
        this.medicineForm.get('unitPrice')?.value,
      )
      .subscribe(
        (response) => {
          console.log('Medicine created successfully:', response);
        },
        (error) => {
          console.error('Error creating Medicine:', error);
        }
      );
  }

  getAllMedicine() {
    this.medicineService.getAllMedicines().subscribe(
      (response) => {
        console.log(response)
        this.medicines = response.data;
      },
      (error) => {
        console.error('Error getting all Medicines', error);
      }
    );
  }

  deleteMedicine(id: string): void {
    this.medicineService.deleteMedicine(id).subscribe(
      (response) => {
        console.log('Medicine deleted successfully:', response);
      },
      (error) => {
        console.error('Error deleting Medicine:', error);
      }
    );
  }

}
