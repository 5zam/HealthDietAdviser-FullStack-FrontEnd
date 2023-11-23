import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";


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
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MealListComponent } from './Components/meal-list/meal-list.component';
import { UpdateMealComponent } from './Components/update-meal/update-meal.component';
import { MealListByDiseaseComponent } from './Components/meal-list-by-disease/meal-list-by-disease.component';
import { MealsForDiseaseComponent } from './Components/meals-for-disease/meals-for-disease.component';



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
    DietPrescriptionComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    MealListComponent,
    UpdateMealComponent,
    MealListByDiseaseComponent,
    MealsForDiseaseComponent,

  

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
