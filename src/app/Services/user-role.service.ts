import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRole } from '../Models/user-role.model';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private API_URL = 'http://localhost:5005/api/user-roles';

  constructor(private http: HttpClient) { }

  getUserRolesByUserId(userId: number): Observable<UserRole[]> {
    return this.http.get<UserRole[]>(`${this.API_URL}/user/${userId}`);
  }
}
