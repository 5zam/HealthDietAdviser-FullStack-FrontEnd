import { Component, OnInit } from '@angular/core';
import { DietPrescription } from 'src/app/Models/diet-prescription.model';
import { DietPrescriptionService } from 'src/app/Services/diet-prescription.service';

@Component({
  selector: 'app-diet-prescription',
  templateUrl: './diet-prescription.component.html',
  styleUrls: ['./diet-prescription.component.css']
})
export class DietPrescriptionComponent implements OnInit{
  dietPrescriptions: DietPrescription[] = [];

  constructor(private dietPrescriptionService: DietPrescriptionService) { }

  ngOnInit(): void {
    this.loadDietPrescriptions();
  }

  loadDietPrescriptions(): void {
    this.dietPrescriptionService.getDietPrescriptionByUserId(1) // Replace with the actual user ID
      .subscribe(
        (prescriptions: DietPrescription[]) => {
          this.dietPrescriptions = prescriptions;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
