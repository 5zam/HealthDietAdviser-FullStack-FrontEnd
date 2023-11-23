import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../Models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private API_URL = 'http://localhost:5005/api/meals';

  constructor(private http: HttpClient) {}

  getAvailableMealsForDisease(diseaseId: number): Observable<Meal[]> {
    // Make an HTTP GET request to fetch available meals for the specified diseaseId
    return this.http.get<Meal[]>(`${this.API_URL}/available-meals/${diseaseId}`);
  }

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


  updateMealImage(mealId: number, mealImagePath: string): Observable<any> {
    const url = `${this.API_URL}/update-image/${mealId}`;
    return this.http.put(url, mealImagePath);
  }

  // here

  updateMeal(mealId: number, meal: Meal): Observable<Meal> {
    const url = `${this.API_URL}/${mealId}`;
    return this.http.put<Meal>(url, meal);
  }
  
  deleteMeal(mealId: number): Observable<void> {
    const url = `${this.API_URL}/${mealId}`;
    return this.http.delete<void>(url);
  }
  getMealsByDiseaseId(diseaseId: number): Observable<any> {
    const options: Object = {
      headers: this.getAuthHeader(),
      responseType: 'text'
    };
    console.log(options)
    const url = `${this.API_URL}/by-disease/${diseaseId}`; // Replace with your API endpoint
    return this.http.get(url,options);
  }

  private getAuthHeader(): HttpHeaders {
    // Get the token from the local storage
    const token: string | null = localStorage.getItem("authToken");
    if (token === null) {
      throw null;
    }
  
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }


}
