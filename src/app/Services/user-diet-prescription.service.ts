import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDietPrescription } from '../Models/user-diet-prescription.model';

@Injectable({
  providedIn: 'root'
})
export class UserDietPrescriptionService {

  private API_URL = 'http://localhost:5005/api/user-diet-prescriptions';

  constructor(private http: HttpClient) { }

  addUserDietPrescription(userDietPrescription: UserDietPrescription): Observable<any> {
    return this.http.post(`${this.API_URL}/add`, userDietPrescription);
  }

  getUserDietPrescriptionsByUserId(userId: number): Observable<UserDietPrescription[]> {
    return this.http.get<UserDietPrescription[]>(`${this.API_URL}/user/${userId}`);
  }
}
