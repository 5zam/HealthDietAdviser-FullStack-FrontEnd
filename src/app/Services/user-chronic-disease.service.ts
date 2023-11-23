import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserChronicDisease } from '../Models/user-chronic-disease.model';

@Injectable({
  providedIn: 'root'
})
export class UserChronicDiseaseService {

  private API_URL = 'http://localhost:5005/api/users';

  constructor(private http: HttpClient) { }
  
  addUserChronicDisease(userChronicDisease: UserChronicDisease): Observable<any> {
    // Add the following line here to make a POST request
    return this.http.post(`${this.API_URL}/${userId}/user-chronic-diseases`, userChronicDisease);
  }

  getUserChronicDiseasesByUserId(userId: number): Observable<UserChronicDisease[]> {
    // Add the following line here to make a GET request
    return this.http.get<UserChronicDisease[]>(`${this.API_URL}/${userId}/user-chronic-diseases`);
  }
}
