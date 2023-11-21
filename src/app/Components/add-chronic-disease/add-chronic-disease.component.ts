import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChronicDiseaseService } from 'src/app/Services/chronic-disease.service'; 
import { ChronicDisease } from 'src/app/Models/ChronicDisease.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-add-chronic-disease',
  templateUrl: './add-chronic-disease.component.html',
  styleUrls: ['./add-chronic-disease.component.css']
})
export class AddChronicDiseaseComponent implements OnInit {

  addChronicDiseaseForm: FormGroup;

  @Output() diseaseAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private chronicDiseaseService: ChronicDiseaseService
  ) {
    this.addChronicDiseaseForm = this.formBuilder.group({
      diseaseName: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addChronicDisease(): void {
    
    if (this.addChronicDiseaseForm.valid) {
      const diseaseName = this.addChronicDiseaseForm.value.diseaseName;
      // Add new Disease:
      const newDisease: ChronicDisease = {
        diseaseId: 0, // In the backend, auto-generates the ID (disease_id)
        diseaseName: diseaseName,
      };
      

      // Call the service to add the disease
      this.chronicDiseaseService.addChronicDisease(newDisease).subscribe(
        (response) => {
          // Handle success
          console.log('Disease added successfully:', response);
          // Clear the form after adding
          this.addChronicDiseaseForm.reset();
          // Emit the event to notify parent component
          this.diseaseAdded.emit();
        },
        (error) => {
          // Handle error
          console.error('Error adding disease:', error);
        
          if (error instanceof HttpErrorResponse) {
            // Log status code and response body (if available)
            console.error('Status Code:', error.status);
            console.error('Response Body:', error.error);
          }
        }
      );
    }
  }



}//end of class



