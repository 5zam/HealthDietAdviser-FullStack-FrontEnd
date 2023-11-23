import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/Models/meal.model';
import { MealService } from 'src/app/Services/meal.service';


@Component({
  selector: 'app-meal-list-by-disease',
  templateUrl: './meal-list-by-disease.component.html',
  styleUrls: ['./meal-list-by-disease.component.css']
})
export class MealListByDiseaseComponent implements OnInit{
  meals: any[];
  @Input()
   diseaseId: number | null = null;
 // diseaseId: number = 25; // Replace with the actual diseaseId

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute
  ) { 
    this.meals = []
    console.log(this.meals.length)
  }

  ngOnInit(): void {
    // Get the diseaseId from the route parameters
    this.route.params.subscribe((params) => {
      this.diseaseId = +params['diseaseId']; // Convert to a number
      // Fetch meals based on the diseaseId
      console.log(this.diseaseId)
      this.loadMealsByDisease(this.diseaseId);
    });
  }

  loadMealsByDisease(diseaseId: number): void {
    // Call the service to fetch meals by diseaseId
    this.mealService.getMealsByDiseaseId(diseaseId).subscribe(
      (meals) => {
        // Ensure meals is an array before assigning it
        if (Array.isArray(meals)) {
          this.meals = meals;
        } else {
          this.meals = [];
        }
        console.log(meals);
      },
      (error) => {
        console.error('Error fetching meals by disease:', error);
        console.log(error.error);
      }
    );
  }
}
