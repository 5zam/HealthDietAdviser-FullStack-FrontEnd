import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuardService } from './Services/auth-guard-service';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AddChronicDiseaseComponent } from './Components/add-chronic-disease/add-chronic-disease.component';
import { AddMealForDiseaseComponent } from './Components/add-meal-for-disease/add-meal-for-disease.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'who-we-are',
    component: SignUpComponent
  },
  {
    path: 'diseases',
    component: AddChronicDiseaseComponent,
    canActivate: [AuthGuardService],
    
  },
  // {
  //   path: 'diseases/:diseaseId', // Add a parameter for the selected disease
  // component: AddMealComponent, 
  // canActivate: [AuthGuardService], 
  // },
  {
    path: 'meals/add/:diseaseId',
    component: AddMealForDiseaseComponent, 
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
