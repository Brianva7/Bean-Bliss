import { Routes } from '@angular/router';
import { CoffeesComponent } from './pages/coffees/coffees.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'coffees', component: CoffeesComponent },

  { path: 'coffees/:id', component: CoffeeComponent },
];
