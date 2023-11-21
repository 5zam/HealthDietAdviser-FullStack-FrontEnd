import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { authService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    public auth: authService,
    public router: Router
  ) { }

  canActivate(): boolean {
    // Check if user is not authenticated
    if (!this.auth.isAuthenticated()) {
      // redirect to login
      this.router.navigate(['login']);
      return false;
    }
    // Access granted
    return true;
  }
}
