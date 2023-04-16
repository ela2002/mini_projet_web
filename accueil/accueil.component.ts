import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  constructor(private router: Router) {}
  
  redirectToPage1() {
    this.router.navigate(['/sign-up']);
  }
  redirectToPage2() {
    this.router.navigate(['/accueil']);
  }
}
