import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserChronicDisease } from '../Models/user-chronic-disease.model';

@Injectable({
  providedIn: 'root'
})
export class UserChronicDiseaseService {

  private API_URL = 'http://localhost:5005/api/user-chronic-diseases';

  constructor(private http: HttpClient) { }

  addUserChronicDisease(userChronicDisease: UserChronicDisease): Observable<any> {
    return this.http.post(`${this.API_URL}/add`, userChronicDisease);
  }

  getUserChronicDiseasesByUserId(userId: number): Observable<UserChronicDisease[]> {
    return this.http.get<UserChronicDisease[]>(`${this.API_URL}/user/${userId}`);
  }
}
