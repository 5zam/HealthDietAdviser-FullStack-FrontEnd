import { Component, OnInit } from '@angular/core';
import { ChronicDisease } from 'src/app/Models/ChronicDisease.model';
import { ChronicDiseaseService } from 'src/app/Services/chronic-disease.service'; 

@Component({
  selector: 'app-delete-chronic-disease',
  templateUrl: './delete-chronic-disease.component.html',
  styleUrls: ['./delete-chronic-disease.component.css']
})
export class DeleteChronicDiseaseComponent implements OnInit{
  diseases: ChronicDisease[] = [];
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private chronicDiseaseService: ChronicDiseaseService) {}

  ngOnInit(): void {
    this.loadDiseases();
  }

  loadDiseases(): void {
    // Call the service to fetch diseases
    this.chronicDiseaseService.getAllDiseases().subscribe(
      (diseases) => {
        this.diseases = diseases;
      },
      (error) => {
        console.error('Error fetching diseases:', error);
      }
    );
  }

  deleteDisease(diseaseId: number): void {
    // Call the service to delete the disease
    this.chronicDiseaseService.deleteDiseaseById(diseaseId).subscribe(
      () => {
        // Remove the deleted disease from the list
        this.diseases = this.diseases.filter((disease) => disease.diseaseId !== diseaseId);
        this.successMessage = 'Disease deleted successfully.';
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error deleting disease:', error);
        this.successMessage = null;
        this.errorMessage = 'Error deleting disease.';
      }
    );
  }

}
