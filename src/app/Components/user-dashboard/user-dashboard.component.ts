import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChronicDisease } from 'src/app/Models/ChronicDisease.model';
import { ChronicDiseaseService } from 'src/app/Services/chronic-disease.service';
import { authService } from 'src/app/Services/auth-service';
import { Meal } from 'src/app/Models/meal.model';
import { MealService } from 'src/app/Services/meal.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
  userId!: number;

  chronicDiseases: ChronicDisease[] = [];
  selectedDiseaseId: number | null = null;
  selectedChronicDiseases: ChronicDisease[] = [];

  availableMeals: Meal[] = []; // Define and initialize the availableMeals array
  selectedMeals: Meal[] = []; // Define and initialize the selectedMeals array

  constructor(
    private chronicDiseaseService: ChronicDiseaseService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: authService, // Inject AuthService
    private mealService: MealService // Inject your MealService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId'];
    });

    // Fetch all Chronic Diseases
    this.fetchAllChronicDiseases();
  }

  fetchAvailableMeals(diseaseId: number) {
    this.mealService.getAvailableMealsForDisease(diseaseId).subscribe(
      (meals: Meal[]) => {
        this.availableMeals = meals;
      },
      (error) => {
        console.error('Error fetching available meals:', error);
      }
    );
  }

  fetchAllChronicDiseases() {
    this.chronicDiseaseService.getAllDiseases().subscribe(
      (diseases) => {
        this.chronicDiseases = diseases;
      },
      (error) => {
        console.error('Error fetching Chronic Diseases:', error);
      }
    );
  }

  onSelectChange(event: any) {
    this.selectedDiseaseId = event.target.value;
    if (this.selectedDiseaseId !== null && typeof this.selectedDiseaseId === 'number') {
      this.fetchAvailableMeals(this.selectedDiseaseId);
    }
  }

  selectChronicDisease() {
      // Get the selected disease ID from the dropdown
      //const selectedDiseaseId = this.selectedDiseaseId;
    if (this.selectedDiseaseId === null || typeof this.selectedDiseaseId !== 'number') {
      console.error('Invalid selected disease ID');
      return;
    }

    const selectedDiseaseId = this.selectedDiseaseId;
    this.fetchAvailableMeals(selectedDiseaseId);


    this.selectedDiseaseId = this.selectedDiseaseId; // You can replace this with the actual logic to get the selected ID



  if (this.selectedDiseaseId === null || typeof this.selectedDiseaseId !== 'number') {
    console.error('Invalid selected disease ID');
    return;
  }
  
    // Check if the selected disease ID is valid
    if (selectedDiseaseId === null || typeof selectedDiseaseId !== 'number') {
      console.error('Invalid selected disease ID');
      return;
    }
  
    // Check if the selected disease is already in the list
    if (this.selectedChronicDiseases.some(disease => disease.diseaseId === selectedDiseaseId)) {
      console.log('Selected disease is already in the list');
      return;
    }
  
    // Find the selected disease object
    const selectedDisease = this.chronicDiseases.find(disease => disease.diseaseId === selectedDiseaseId);
  
    if (selectedDisease) {
      // Add the selected disease to the selectedChronicDiseases array
      this.selectedChronicDiseases.push(selectedDisease);
  
      // Add the selected disease to the user's profile
      this.chronicDiseaseService.addSelectedChronicDiseaseToUser(this.userId, selectedDisease.diseaseId).subscribe(
        (response: any) => {
          console.log('Selected disease added to the user:', response);
          // Handle success, update your component's data or UI
        },
        (error: any) => {
          console.error('Error adding selected disease to the user:', error);
          // Handle error, show an error message, etc.
        }
      );
    } else {
      console.error('Selected disease not found');
    }
  }
  

  // Function to add selected chronic disease
  addSelectedChronicDisease() {
    if (this.selectedDiseaseId !== null) {
      // Find the selected disease by its ID
      const selectedDisease = this.chronicDiseases.find((disease) => disease.diseaseId === this.selectedDiseaseId);
  
      // Check if the disease is not already selected
      if (selectedDisease && !this.selectedChronicDiseases.some((d) => d.diseaseId === selectedDisease.diseaseId)) {
        this.selectedChronicDiseases.push(selectedDisease);
  
        // Send a POST request to associate the selected disease with the user
        this.chronicDiseaseService.addSelectedChronicDiseaseToUser(this.userId, selectedDisease.diseaseId).subscribe(
          (response) => {
            console.log('Selected disease added to the user:', response);
            // Handle success, update your component's data or UI
          },
          (error) => {
            console.error('Error adding selected disease to the user:', error);
            // Handle error, show an error message, etc.
          }
        );
      } else {
        console.log('Selected disease is already in the list');
      }
  
      // Clear the selected option in the dropdown
      this.selectedDiseaseId = null;
    }
  }
  

  addSelectedMeal(meal: Meal) {
    // Add the logic to handle adding the selected meal here
    // For example, push it to a selectedMeals array
    this.selectedMeals.push(meal); // You should define and initialize selectedMeals array
  }

  // Function to remove a selected chronic disease
  removeChronicDisease(disease: ChronicDisease) {
    // Remove the selected chronic disease from the list
    const index = this.selectedChronicDiseases.indexOf(disease);
    if (index > -1) {
      this.selectedChronicDiseases.splice(index, 1);
    }
  }

  // Function to navigate to meals page with diseaseId
  goToMeals(diseaseId: number) {
    this.router.navigate(['/meals', diseaseId]);
  }


}


