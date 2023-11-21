import { Component,OnInit  } from '@angular/core';
import { ChronicDisease } from 'src/app/Models/ChronicDisease.model';
import { ChronicDiseaseService } from 'src/app/Services/chronic-disease.service'; 

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-display-chronic-diseases',
  templateUrl: './display-chronic-diseases.component.html',
  styleUrls: ['./display-chronic-diseases.component.css']
})
export class DisplayChronicDiseasesComponent implements OnInit{
 
searchTerm: string = '';
diseases: ChronicDisease[] = [];
originalDiseases: ChronicDisease[] = []; 

constructor(
  private chronicDiseaseService: ChronicDiseaseService,
  private toastr: ToastrService // Inject ToastrService
) {}

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
      this.toastr.error('Error fetching diseases', 'Error');
    }
  );
}

searchDiseases(): void {
  // Call the service to filter diseases based on the search term
  if (this.searchTerm.trim() !== '') {
    this.chronicDiseaseService.searchDiseaseByName(this.searchTerm).subscribe(
      (diseases) => {
        this.diseases = diseases;
      },
      (error) => {
        console.error('Error searching diseases:', error);
        if (error.status === 403) {
          this.toastr.error('You don\'t have permission to access this resource', 'Forbidden');
        } else {
          this.toastr.error('Error searching diseases', 'Error');
        }
      }
    );
  } else {
    // If the search term is empty, load all diseases
    this.loadDiseases();
  }
}



deleteDisease(diseaseId: number): void {
  // Implement the logic to delete a disease by ID
  // Call the service to delete the disease
  this.chronicDiseaseService.deleteDiseaseById(diseaseId).subscribe(
    (response) => {
      // Handle success
      this.toastr.success('Disease deleted successfully', 'Success');
      // After successful deletion, update the 'diseases' array accordingly
      this.loadDiseases();
    },
    (error) => {
      // Handle error
      console.error('Error deleting disease:', error);
      this.toastr.error('Error deleting disease', 'Error');
    }
  );
}



}
