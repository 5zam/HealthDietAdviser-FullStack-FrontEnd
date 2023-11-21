import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/User.model';
@Injectable({
  providedIn: 'root'
})
export class authService {

  public currentUserSubject = new BehaviorSubject<any>(null); 

  readonly API_URL = 'http://localhost:5005';

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated(): boolean {
    // Get the token from the local storage
    const token: string | null = localStorage.getItem('authToken');
    // If not exist return false
    return token !== null;
  }

  authenticate(): Observable<User> {
    // Get the token from the local storage
    const storedToken: string | null = localStorage.getItem('authToken');

    if (storedToken === null) {
      throw null;
    }

    // Create the Authorization header
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${storedToken}`
      })
    };

    // Get logged user information
    return this.http.get<User>(`${this.API_URL}/api/verify`, options);

  }

  register(name: string, email: string, password: string): Observable<User> {

    const user: User = new User(
      null,
      name,
      email,
      password,
      []
    );
    // Register a new user
    return this.http.post<User>(`${this.API_URL}/api/signup`, user);

  }

  login(email: string, password: string): Observable<any> {

    const body = {
      email,
      password
    };
    // Check credentials in the server
    return this.http.post<any>(`${this.API_URL}/api/login`, body);
  }

  logout(): void {
      // Remove the token and the user information from local storage to log user out
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
  }

  //current user
  getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }
  getCurrentUserId(): number | null {
    const currentUser = this.currentUserSubject.value;
    return currentUser ? currentUser.id : null;
  }
}
