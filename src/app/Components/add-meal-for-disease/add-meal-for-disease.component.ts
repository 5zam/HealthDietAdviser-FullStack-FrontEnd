import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/Models/meal.model';
import { MealService } from 'src/app/Services/meal.service';

@Component({
  selector: 'app-add-meal-for-disease',
  templateUrl: './add-meal-for-disease.component.html',
  styleUrls: ['./add-meal-for-disease.component.css']
})
export class AddMealForDiseaseComponent implements OnInit{
   diseaseId!: number;
  meal: Meal = {
    name: '',
    type: '',
    mealImagePath: '',
    calories: 0,
    protein: 0,
    diseaseId: 0,
    mealId: 0
  };

  

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve the disease ID from route parameters
    this.route.params.subscribe((params) => {
      this.diseaseId = +params['diseaseId']; // Convert to a number
      this.meal.diseaseId = this.diseaseId; // Assign the diseaseId to the meal object
    });
  }

  addMeal(): void {
    // Call the meal service to add the meal to the chronic disease
    this.mealService.addMealToChronicDisease(this.diseaseId, this.meal).subscribe(
      (response) => {
        // Handle success
        console.log('Meal added successfully!', response);
        // After adding the meal, navigate back to the disease details page
        this.router.navigate(['/disease-details', this.diseaseId]);
      },
      (error) => {
        // Handle error
        console.error('Error adding meal:', error);
        // You can show an error message to the user if needed
      }
    );
  }
}
