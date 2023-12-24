import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {DoctorService} from "../../shared/services/doctor.service";
import {PatientService} from "../../shared/services/patient.service";
import {MedicineService} from "../../shared/services/medicine.service";
import {HolderService} from "../../shared/services/holder.service";
import {isPlatformBrowser} from "@angular/common";
import {OwlOptions} from "ngx-owl-carousel-o";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['index','userid','email', 'firstname','lastname'];

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  showFiller = false;

  patientCount: number | undefined;
  doctorCount: number | undefined;
  inventoryHolderCount: number | undefined;
  medicineCount: number | undefined;
  isBrowser: boolean;

  cards: any[] = [];
  users: object[] = [];

  constructor(
    private doctorService: DoctorService,
    private patientService: PatientService,
    private medicineService: MedicineService,
    private holderService: HolderService,
    private userService: UserService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  getDocCount(): void {
    this.doctorService.count().subscribe(
      (result) => {
        this.doctorCount = result.data;
        console.log(result.data)
      },
      (error) => {
        console.error('Error fetching data count', error);
      }
    );
  }

  getpatientCount(): void {
    this.patientService.count().subscribe(
      (result) => {
        this.patientCount = result.data;
        console.log(result.data)
      },
      (error) => {
        console.error('Error fetching data count', error);
      }
    );
  }

  getMedicineCount(): void {
    this.medicineService.count().subscribe(
      (result) => {
        this.medicineCount = result.data;
        console.log(result.data)
      },
      (error) => {
        console.error('Error fetching data count', error);
      }
    );
  }

  getInventoryCount(): void {
    this.holderService.count().subscribe(
      (result) => {
        this.inventoryHolderCount = result.data;
        console.log(result.data)
      },
      (error) => {
        console.error('Error fetching data count', error);
      }
    );
  }

  ngOnInit() {
    this.getDocCount();
    this.getpatientCount();
    this.getMedicineCount();
    this.getInventoryCount();
    this.updateCards();
    this.getALlUsers();


  }

  getALlUsers() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        console.log(response)
        this.users = response.data;
      },
      (error) => {
        console.error('Error getting all doctors', error);
      }
    );
  }

  updateCards() {
    this.cards = [
      {
        name: 'Patient',
        countIs: this.patientCount,
      },
      {
        name: 'Doctor',
        countIs: this.doctorCount,
      },
      {
        name: 'Inventory Holders',
        countIs: this.inventoryHolderCount,
      },
      {
        name: 'Medicine',
        countIs: this.medicineCount,
      },
    ];
  }

}
