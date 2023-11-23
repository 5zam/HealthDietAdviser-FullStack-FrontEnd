import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/Models/meal.model';
import { MealService } from 'src/app/Services/meal.service';

@Component({
  selector: 'app-update-meal',
  templateUrl: './update-meal.component.html',
  styleUrls: ['./update-meal.component.css']
})
export class UpdateMealComponent implements OnInit{
  mealId!: number;
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
    this.route.params.subscribe((params) => {
      this.mealId = +params['mealId'];
      this.mealService.getMealById(this.mealId).subscribe(
        (meal) => {
          this.meal = meal;
        },
        (error) => {
          console.error('Error fetching meal:', error);
        }
      );
    });
  }

  updateMeal(): void {
    this.mealService.updateMeal(this.mealId, this.meal).subscribe(
      (updatedMeal) => {
        // Handle success, you can show a success message
      },
      (error) => {
        console.error('Error updating meal:', error);
        // Handle error, you can show an error message
      }
    );
  }

  deleteMeal(): void {
    this.mealService.deleteMeal(this.mealId).subscribe(
      () => {
        // Handle success (optional), you can show a success message
        // Redirect to the meal list or any other page
        this.router.navigate(['/meals']);
      },
      (error) => {
        console.error('Error deleting meal:', error);
        // Handle error, you can show an error message
      }
    );
  }
  navigateToUpdate(mealId: number): void {
    // Implement the navigation logic here using the mealId
  }
  
}
