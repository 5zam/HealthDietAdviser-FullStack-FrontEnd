import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChronicDisease } from 'src/app/Models/ChronicDisease.model';
import { ChronicDiseaseService } from 'src/app/Services/chronic-disease.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

  chronicDiseases: ChronicDisease[] = [];
  selectedChronicDiseases: ChronicDisease[] = [];
  selectedDiseaseId: number | undefined;

  constructor(
    private chronicDiseaseService: ChronicDiseaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Load the list of chronic diseases when the component initializes
    this.loadChronicDiseases();
  }

  loadChronicDiseases() {
    this.chronicDiseaseService.getAllDiseases().subscribe(
      (diseases) => {
        this.chronicDiseases = diseases;
      },
      (error) => {
        console.error('Error loading chronic diseases:', error);
      }
    );
  }

  selectChronicDisease() {
    if (this.selectedDiseaseId !== undefined) {
      const selectedDisease = this.chronicDiseases.find(disease => disease.diseaseId === this.selectedDiseaseId);
      if (selectedDisease) {
        this.selectedChronicDiseases.push(selectedDisease);
      }
    }
  }

  removeChronicDisease(chronicDisease: ChronicDisease) {
    // Remove the selected chronic disease from the selectedChronicDiseases array
    const index = this.selectedChronicDiseases.indexOf(chronicDisease);
    if (index > -1) {
      this.selectedChronicDiseases.splice(index, 1);
    }
  }

  goToMeals(diseaseId: number | undefined): void {
    if (diseaseId !== undefined) {
      this.router.navigate(['/meals', diseaseId]);
    }
  }
}


