import { Component, OnInit } from '@angular/core';
import { CoffeesService } from '../../services/coffees.services';
import { Coffee } from '../../models/coffee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css'],
  standalone: true, // Importante para Angular 18
  imports: [FormsModule, CommonModule],
})
export class CoffeesComponent implements OnInit {
  coffees: Coffee[] = [];
  brands: string[] = [];
  varieties: string[] = [];
  filters = {
    brand: '',
    variety: '',
    minPrice: null,
    maxPrice: null,
  };

  constructor(private coffeesService: CoffeesService) {}

  ngOnInit(): void {
    this.loadCoffees();
  }

  loadCoffees(): void {
    this.coffeesService.getCoffees().subscribe((data) => {
      this.coffees = data;
      this.extractFilters();
    });
  }

  applyFilters(): void {
    this.coffeesService.getFilteredCoffees(this.filters).subscribe((data) => {
      this.coffees = data;
    });
  }

  extractFilters(): void {
    const brands = new Set<string>();
    const varieties = new Set<string>();

    this.coffees.forEach((coffee) => {
      brands.add(coffee.brand);
      varieties.add(coffee.variety);
    });

    this.brands = Array.from(brands);
    this.varieties = Array.from(varieties);
  }
}
