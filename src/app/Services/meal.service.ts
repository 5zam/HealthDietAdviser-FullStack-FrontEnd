import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../Models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private API_URL = 'http://localhost:5005/api/meals';

  constructor(private http: HttpClient) {}

  addMealToChronicDisease(chronicDiseaseId: number, meal: Meal): Observable<any> {
    const url = `${this.API_URL}/add-to-chronic-disease/${chronicDiseaseId}`;
    return this.http.post(url, meal);
  }

  getAllMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${this.API_URL}/all`);
  }


  // Define an 'addMeal' method to send a POST request to your API
  addMeal(newMeal: Meal) {
    return this.http.post('/api/meals/add', newMeal);
  }

  getMealById(mealId: number): Observable<Meal> {
    return this.http.get<Meal>(`${this.API_URL}/${mealId}`);
  }

  updateMeal(meal: Meal): Observable<any> {
    return this.http.put(`${this.API_URL}/update`, meal);
  }

  updateMealImage(mealId: number, mealImagePath: string): Observable<any> {
    const url = `${this.API_URL}/update-image/${mealId}`;
    return this.http.put(url, mealImagePath);
  }

  deleteMealById(mealId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/delete-by-id/${mealId}`);
  }

  deleteMealByName(mealName: string): Observable<any> {
    const encodedName = encodeURIComponent(mealName); // Encode spaces and special characters
    const url = `${this.API_URL}/delete-by-name/${encodedName}`;
    return this.http.delete(url);
  }

  deleteMeal(mealId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/api/meals/delete/${mealId}`);
  }
}
