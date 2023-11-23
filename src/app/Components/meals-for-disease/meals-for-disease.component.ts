import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/Services/meal.service';

@Component({
  selector: 'app-meals-for-disease',
  templateUrl: './meals-for-disease.component.html',
  styleUrls: ['./meals-for-disease.component.css']
})
export class MealsForDiseaseComponent implements OnInit{
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
    if (!isNaN(diseaseId)) {
      this.mealService.getMealsByDiseaseId(diseaseId).subscribe(
        (meals) => {
          console.log('API Response:', meals); // Log the API response
          if (Array.isArray(meals)) {
            // Handle the meals data here
            this.meals = meals;
          } else {
            console.error('API did not return an array of meals:', meals);
          }
        },
        (error) => {
          console.error('Error fetching meals by disease:', error);
          console.log(error.error);
        }
      );
    } else {
      console.error('Invalid diseaseId:', diseaseId);
    }
  }
  
  
  }
  
