import { Routes } from '@angular/router';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { CoffeeComponent } from './components/coffees/coffee/coffee.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'coffees', component: CoffeesComponent },

  { path: 'coffees/:id', component: CoffeeComponent },
];
