import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/Models/meal.model';
import { MealService } from 'src/app/Services/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit{

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
        this.meals = meals;
        console.log(meals)
      },
      (error) => {
        console.error('Error fetching meals by disease:', error);
        console.log(error.error)
      }
    );
  }
  
  // meals: Meal[] = [];

  // constructor(
  //   private mealService: MealService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.mealService.getAllMeals().subscribe(
  //     (meals) => {
  //       this.meals = meals;
  //     },
  //     (error) => {
  //       console.error('Error fetching meals:', error);
  //     }
  //   );
  // }

  // navigateToUpdate(mealId: number): void {
  //   this.router.navigate(['/update-meal', mealId]);
  // }

  // deleteMeal(mealId: number): void {
  //   this.mealService.deleteMeal(mealId).subscribe(
  //     () => {
  //       // Remove the deleted meal from the 'meals' array
  //       this.meals = this.meals.filter((meal) => meal.mealId !== mealId);
  //     },
  //     (error) => {
  //       console.error('Error deleting meal:', error);
  //     }
  //   );
  // }

}
