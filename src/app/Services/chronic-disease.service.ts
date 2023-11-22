import { Injectable } from '@angular/core';
import { ChronicDisease } from '../Models/ChronicDisease.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChronicDiseaseService {
  // API_URL = ( http://localhost:5005/api/chronicdiseases/all ) in the backEnd
  private API_URL = 'http://localhost:5005/api/chronicdiseases';

  constructor(private http: HttpClient) {}


  // add new ChronicDisease
  //http.authorizeRequests().antMatchers("/api/chronicdiseases/add").permitAll();
  addChronicDisease(disease: ChronicDisease): Observable<any> {
    return this.http.post(`${this.API_URL}/add`, disease);
  }
  // get  all ChronicDisease
  //http.authorizeRequests().antMatchers("/api/chronicdiseases/all").permitAll();
  getAllDiseases(): Observable<ChronicDisease[]> {
    return this.http.get<ChronicDisease[]>(`${this.API_URL}/all`);
  }

    // Search for Diseases by Name
 // http.authorizeRequests().antMatchers("/api/chronicdiseases/getByName/**").permitAll();
    searchDiseaseByName(name: string): Observable<ChronicDisease[]> {
      return this.http.get<ChronicDisease[]>(`${this.API_URL}/search?name=${name}`);
    }
  
   // Delete Disease by ID
  //http.authorizeRequests().antMatchers("/api/chronicdiseases/delete/**").permitAll();
    deleteDiseaseById(id: number): Observable<any> {
      return this.http.delete(`${this.API_URL}/delete/${id}`);
    }

    getSelectedChronicDiseasesForUser(userId: number): Observable<ChronicDisease[]> {
      const url = `${this.API_URL}/selected-diseases/${userId}`;
      return this.http.get<ChronicDisease[]>(url);
    }

    addSelectedChronicDiseaseToUser(userId: number, diseaseId: number): Observable<any> {
      const url = `${this.API_URL}/add-selected-disease/${userId}/${diseaseId}`;
      return this.http.post(url, null);
    }
    
}
