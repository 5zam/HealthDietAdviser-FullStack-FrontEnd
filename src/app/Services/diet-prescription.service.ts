import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DietPrescription } from '../Models/diet-prescription.model';

@Injectable({
  providedIn: 'root'
})
export class DietPrescriptionService {

  private API_URL = 'http://localhost:5005/api/diet-prescriptions';

  constructor(private http: HttpClient) { }

  createDietPrescription(dietPrescription: DietPrescription): Observable<any> {
    return this.http.post(`${this.API_URL}/add`, dietPrescription);
  }

  getDietPrescriptionByUserId(userId: number): Observable<DietPrescription[]> {
    return this.http.get<DietPrescription[]>(`${this.API_URL}/user/${userId}`);
  }

  getDietPrescriptionById(dietPrescriptionId: number): Observable<DietPrescription> {
    return this.http.get<DietPrescription>(`${this.API_URL}/${dietPrescriptionId}`);
  }

  associateMealWithDietPrescription(dietPrescriptionId: number, mealIds: number[]): Observable<any> {
    const url = `${this.API_URL}/add-meals/${dietPrescriptionId}`;
    return this.http.post(url, mealIds);
  }
}
