import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {  AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  {path: 'sign-in' , component: SignInComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'accueil', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
