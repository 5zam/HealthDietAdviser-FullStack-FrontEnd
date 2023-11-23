import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuardService } from './Services/auth-guard-service';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AddChronicDiseaseComponent } from './Components/add-chronic-disease/add-chronic-disease.component';
import { AddMealForDiseaseComponent } from './Components/add-meal-for-disease/add-meal-for-disease.component';
import {WhoWeAreComponent} from './Components/who-we-are/who-we-are.component'
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';



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
    component: WhoWeAreComponent
  },
  {
    path: 'diseases',
    component: AddChronicDiseaseComponent,
    canActivate: [AuthGuardService],
  },
  { 
    path: 'dashboard/:userId', 
    component: UserDashboardComponent, 
    canActivate: [AuthGuardService],
  },
  {
    path: 'meals/add/:diseaseId',
    component: AddMealForDiseaseComponent, 
  },
  { path: '***', component: NotFoundComponent },

  // { 
  //   path: 'meals/:diseaseId',
  //    component: MealsComponent ,
  //    canActivate: [AuthGuardService],
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
