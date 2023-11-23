import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HealthDietAdviser';
  constructor(private router: Router) {}

  ngOnInit() {
    // Check network status and navigate to "Offline" page if offline
    if (!navigator.onLine) {
      this.router.navigate(['/offline']);
    }
  }
}
