import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  name: string | null = null;

  constructor(private router: Router) {} // Inject Router

 ngOnInit(): void {
   this.name = JSON.parse(localStorage.getItem("currentUser") as string).name;
 }

 navigateToDashboard() {
  // Use the router to navigate to the UserDashboardComponent
  this.router.navigate(['dashboard/:userId']);
}

}
