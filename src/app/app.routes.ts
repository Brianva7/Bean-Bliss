import { Routes } from '@angular/router';
import { CoffeesComponent } from './pages/coffees/coffees.component';
import { HomeComponent } from './pages/home/home.component';
import { CoffeeComponent } from './pages/coffees/coffee/coffee.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './pages/termsandconditions/termsandconditions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'coffees', component: CoffeesComponent },

  { path: 'coffees/:id', component: CoffeeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'legal/privacypolicy', component: PrivacypolicyComponent },

  { path: 'legal/termsandconditions', component: TermsandconditionsComponent },

  { path: '**', redirectTo: '' },
];
