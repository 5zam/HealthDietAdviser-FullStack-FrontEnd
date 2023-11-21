import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChronicDiseaseService } from 'src/app/Services/chronic-disease.service'; 
import { ChronicDisease } from 'src/app/Models/ChronicDisease.model'; // Import your Chronic Disease model

@Component({
  selector: 'app-add-chronic-disease',
  templateUrl: './add-chronic-disease.component.html',
  styleUrls: ['./add-chronic-disease.component.css']
})
export class AddChronicDiseaseComponent implements OnInit {

  @Output()
  chronicDiseaseAddedEvent: EventEmitter<void>;

  addChronicDiseaseForm: FormGroup;
  diseaseNameInput: FormControl;

  constructor(private chronicDiseaseService: ChronicDiseaseService) {
    this.diseaseNameInput = new FormControl('', [Validators.required]);
    this.addChronicDiseaseForm = new FormGroup({
      diseaseName: this.diseaseNameInput,
      // Add more form controls for additional fields if needed
    });

    this.chronicDiseaseAddedEvent = new EventEmitter<void>();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addChronicDisease(): void {
    if (this.addChronicDiseaseForm.invalid) {
      return;
    }
  
    const disease: ChronicDisease = new ChronicDisease(
      null, // Set to null if the backend generates the ID
      this.addChronicDiseaseForm.value.diseaseName,
      // Add additional form field values here
    );
  
    this.chronicDiseaseService.addChronicDisease(disease).subscribe({
      next: () => {
        // Reset the form
        this.diseaseNameInput.setValue('');
        // Reset other form controls if needed
  
        // Emit an event to notify the parent component
        this.chronicDiseaseAddedEvent.emit();
      },
      error: (error: any) => { // Specify the type of the error parameter
        console.log(error);
      }
    });
  }
  
}