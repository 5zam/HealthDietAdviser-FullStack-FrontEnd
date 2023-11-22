import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AddChronicDiseaseComponent} from './Components/add-chronic-disease/add-chronic-disease.component';
import { DisplayChronicDiseasesComponent } from './Components/display-chronic-diseases/display-chronic-diseases.component';
import { DeleteChronicDiseaseComponent } from './Components/delete-chronic-disease/delete-chronic-disease.component';
import { AddMealForDiseaseComponent } from './Components/add-meal-for-disease/add-meal-for-disease.component'
import { MatTabsModule } from '@angular/material/tabs';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { DietPrescriptionComponent } from './Components/diet-prescription/diet-prescription.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    WhoWeAreComponent,
    AddChronicDiseaseComponent,
    DisplayChronicDiseasesComponent,
    DeleteChronicDiseaseComponent,
    AddMealForDiseaseComponent,
    UserDashboardComponent,
    DietPrescriptionComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
