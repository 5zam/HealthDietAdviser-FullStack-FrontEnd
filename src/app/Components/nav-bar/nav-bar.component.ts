import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from 'src/app/Services/auth-service';

@Component({
  selector: 'app-nav-bar',
  template: `
    <mat-toolbar color="primary">
      <div class="navbar-container">
        <a mat-button [routerLink]="['/']">Home</a>
        <a mat-button [routerLink]="['/who-we-are']">Who we are</a>
        <a mat-button [routerLink]="['/diseases']">Chronic Diseases</a>
        <a mat-button (click)="logout()">Logout</a>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .navbar-container {
      display: flex;
      align-items: center;
    }

    .navbar-container a {
      text-decoration: none;
      color: #333333;
      font-weight: bold;
      text-transform: uppercase;
      margin-right: 10px;
      padding: 8px;
      border-radius: 4px;
      transition: background-color 0.3s;
    }

    .navbar-container a:hover {
      background-color: #eeeeee;
    }
  `],
  //templateUrl: './nav-bar.component.html',
 // styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{


  ngOnInit(): void {}

  constructor(
    private authService: authService,
    private router: Router
  ) { }

  logout(): void {
    // Log out
    this.authService.logout();
    // Redirect to login page
    this.router.navigate(['/login']);
   }

}

